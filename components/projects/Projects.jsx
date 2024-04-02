import PageHeader from "../PageHeader";
import ProjectsSection from "./ProjectsSection";

const Projects = () => {
  return (
    <div
      className="w-full h-auto md:min-h-screen md:px-28 px-8 py-16 dark:bg-slate-800"
      id="projects"
    >
      <div className="w-full md:flex ">
        <div className="md:w-1/5 w-full h-auto flex flex-col justify-start items-center border-r-2 border-gray-400">
          <PageHeader>Projects</PageHeader>
        </div>
        <div className="md:w-4/5 w-full h-auto p-5 ">
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
};

export default Projects;
