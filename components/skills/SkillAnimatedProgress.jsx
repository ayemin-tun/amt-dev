import { motion } from "framer-motion";
const SkillAnimatedProgress = ({ skill, percent, isAnimate }) => {
  return (
    <>
      <motion.span
        className="my-2 font-semibold text-xl dark:text-slate-300"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
        initial="hidden"
        animate={isAnimate ? "visible" : "hidden"}
      >
        {skill}
      </motion.span>
      <motion.div
        variants={{
          hidden: {
            width: 0,
          },
          visible: {
            width: `${percent}%`,
            transition: { type: "spring", delay: 0.3 },
            ease: "ease",
          },
        }}
        initial="hidden"
        animate={isAnimate ? "visible" : "hidden"}
        className="md:rounded-s-lg md:rounded-e-none rounded-s-none rounded-e-lg bg-blue-500 md:h-4 h-5 flex items-center justify-center"
      >
        <motion.span
          className="text-xs text-white"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            },
          }}
          initial="hidden"
          animate={isAnimate ? "visible" : "hidden"}
        >
          {percent} {percent && "%"}
        </motion.span>
      </motion.div>
    </>
  );
};

export default SkillAnimatedProgress;
