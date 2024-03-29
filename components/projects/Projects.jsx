import PageHeader from "../PageHeader";
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
        <div className="md:w-4/5 w-full md:max-h-[84vh]  md:overflow-scroll p-5 cursor-s-resize">
          <div
            className="w-full md:h-[80vh] h-auto bg-red-200 mb-2"
            id="project1"
          >
            Projects 1
          </div>
          <div
            className="w-full md:h-[80vh] h-auto bg-red-200 mb-2"
            id="project2"
          >
            Projects 2
          </div>
          <div
            className="w-full md:h-[80vh] h-auto bg-red-200 mb-2"
            id="project3"
          >
            Projects 3
          </div>
          <div
            className="w-full md:h-[80vh] h-auto bg-red-200 mb-2"
            id="project4"
          >
            Projects 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
