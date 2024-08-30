"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectData from "./ProjectData";
import ProjectDetail from "./ProjectDetail";
import RealTimeProjectData from "./RealTimeProjectData";
const ProjectsSection = ({ type }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimate, setIsAnimate] = useState(false);
  let projects = ProjectData();
  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsAnimate(!isAnimate);
  };
  const closeProjectDetail = () => {
    setIsAnimate(false);
    setSelectedProject(null);
  };
  if (type && type === "realtime") {
    projects = RealTimeProjectData();
  }
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.index}
          className="w-full h-auto mb-7 px-2 py-5 md:flex gap-2 cursor-pointer dark:hover:bg-black/10 hover:bg-slate-400 hover:bg-opacity-25 transition-colors duration-300 rounded-lg"
          id="projectDetail"
          onClick={() => openProjectDetail(project)}
          data-aos="zoom-in"
        >
          <div className="md:w-1/5 w-full p-1 mb-4">
            <img
              src={project.image}
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
          {/* close Button */}
          <div className="w-full px-5 pt-3">
            <span
              onClick={closeProjectDetail}
              className="font-extrabold text-3xl text-red-500 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x w-10 h-10"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
          </div>

          {selectedProject && (
            <>
              <div className="w-full p-5">
                <div className="md:flex mt-7">
                  <div className="md:w-1/3 w-full">
                    <a href={selectedProject.image} target="_blank">
                      <img
                        src={selectedProject.image}
                        width={100}
                        height={100}
                        alt={selectedProject.name}
                        className="w-full object-center"
                      />
                    </a>
                  </div>

                  <ProjectDetail selectedProject={selectedProject} />
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
