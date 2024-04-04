"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
        className={` fixed left-3 bottom-3 animate-bounce ${
          isScrolling ? "block" : "hidden"
        }`}
      >
        <Link href="/">
          <Image
            src="/Cartoon_space_rocket.png"
            width={35}
            height={35}
            alt="top"
            className=" -rotate-45 cursor-pointer"
          />
        </Link>
      </motion.span>
    </AnimatePresence>
  );
};

export default Setting;
