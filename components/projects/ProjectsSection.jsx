"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProjectData from "./ProjectData";
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimate, setIsAnimate] = useState(false);
  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsAnimate(!isAnimate);
  };
  const closeProjectDetail = () => {
    setIsAnimate(false);
    setSelectedProject(null);
  };
  return (
    <>
      {ProjectData().map((project) => (
        <div
          key={project.index}
          className="w-full h-auto mb-7 px-2 py-5 md:flex gap-2 cursor-pointer dark:hover:bg-black dark:hover:bg-opacity-25 hover:bg-slate-400 hover:bg-opacity-25 transition-colors duration-150 rounded-lg"
          id="projectDetail"
          onClick={() => openProjectDetail(project)}
          data-aos="zoom-in"
        >
          <div className="md:w-1/5 w-full p-1 mb-4">
            <Image
              src={project.images[0]}
              width={100}
              height={100}
              alt={project.name}
              className="md:w-[150px] md:h-[100px] w-full h-auto object-center"
            />
          </div>
          <div className="w-full md:w-4/5 px-5 dark:text-slate-300 text-gray-800">
            <h1 className="text-lg font-bold mb-2 flex items-center gap-2">
              {project.name}{" "}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 svg-path"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </motion.svg>
            </h1>
            <p className="text-pretty text-base">{project.description}</p>
            <div className="flex flex-wrap mt-5">
              {project.Language.map((language, index) => (
                <span
                  key={index}
                  className="m-1 rounded-full bg-slate-400 bg-opacity-50 px-2 "
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <AnimatePresence>
        <motion.div
          variants={{
            hidden: {
              width: 0,
              opacity: 0,
            },
            visible: {
              width: `90%`,
              opacity: 1,
              transition: { type: "spring", delay: 0.3 },
              ease: "ease",
            },
          }}
          initial="hidden"
          animate={isAnimate ? "visible" : "hidden"}
          className={`fixed right-0 top-0 dark:bg-gray-800 bg-slate-200 shadow-lg w-[0%] h-screen z-40 overflow-y-hidden
          }`}
        >
          <button onClick={closeProjectDetail}>Show</button>
          {selectedProject && <h1>{selectedProject.name}</h1>}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
