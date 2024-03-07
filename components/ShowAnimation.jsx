"use client";
import React from "react";
import { motion } from "framer-motion";
const ShowAnimation = ({ children, delay }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: delay,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default ShowAnimation;
