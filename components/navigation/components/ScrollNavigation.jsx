import { motion } from "framer-motion";
import NavigationLinks from "./NavigationLinks";
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
       <NavigationLinks/>
      </div>
    </motion.div>
  );
};
export default ScrollNavigation;

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
