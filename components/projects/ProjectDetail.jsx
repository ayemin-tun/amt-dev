import ButtonSection from "./ButtonSection";

const ProjectDetail = ({ selectedProject }) => {
  return (
    <div className="md:w-2/3 w-full md:h-[65vh] h-[55vh] overflow-y-scroll md:px-7 py-0">
      <h1 className="dark:text-white font-bold md:text-3xl text-xl mb-4 md:mt-0 mt-4 sticky top-0 py-3">
        {selectedProject.name}
      </h1>
      <p className="dark:text-white text-pretty md:text-lg text-base mb-3">
        {selectedProject.detail}
      </p>

      <div className="my-2 flex flex-wrap">
        {selectedProject.Language.map((language, index) => (
          <span
            key={index}
            className="m-1 rounded-full bg-slate-400 dark:text-white bg-opacity-50 px-2 "
          >
            {language}
          </span>
        ))}
      </div>
      <ButtonSection selectedProject={selectedProject} />
    </div>
  );
};

export default ProjectDetail;
