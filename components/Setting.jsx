"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LightDarkToggle from "./navigation/components/LightDarkToogle";
const Setting = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    window.scrollY >= (window.innerHeight * 20) / 100
      ? setIsScrolling(true)
      : setIsScrolling(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavAnimations = {
    initial: {
      y: 0,
      x: "-50%",
      opacity: 0,
    },
    animate: {
      y: -10,
      x: "-50%",
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.3,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.span
        variants={NavAnimations}
        initial="initial"
        animate={isScrolling ? "animate" : "initial"}
        className={` fixed right-3 bottom-3 animate-bounce ${
          isScrolling ? "block" : "hidden"
        } dark:bg-slate-600 bg-opacity-25 rounded-lg dark:border-none border`}
      >
        <LightDarkToggle />
      </motion.span>
    </AnimatePresence>
  );
};

export default Setting;
