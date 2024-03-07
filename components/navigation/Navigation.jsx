"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FixedNavigation from "./components/FixedNavigation";
import ScrollNavigation from "./components/ScrollNavigation";
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
