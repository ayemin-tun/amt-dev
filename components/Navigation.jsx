"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const FixedNavigation = () => {
  return (
    <div className="fixed z-10 w-full p-3 flex justify-between">
      <div className="bg-green-300">Hello</div>
      <div className="flex gap-3 text-white">
        <Link href="/" className="capitalize">
          Home
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Project</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="bg-green-700">dark/light</div>
    </div>
  );
};

const ScrollNavigation = ({ isScrolling }) => {
  return (
    <motion.div
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-10 flex justify-between px-4 py-2 rounded-full scrollNav-bg left-1/2 top-5"
    >
      <div className="flex gap-3 text-black font-medium">
        <Link href="/" className="capitalize">
          Home
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Project</Link>
        <Link href="/">Contact</Link>
      </div>
    </motion.div>
  );
};
export default function Navigation() {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= (window.innerHeight * 20) / 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <ScrollNavigation isScrolling={isScrolling} />
        ) : (
          <FixedNavigation />
        )}
      </AnimatePresence>
    </>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};
