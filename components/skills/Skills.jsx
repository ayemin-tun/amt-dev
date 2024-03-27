import PageHeader from "../pageHeader";
import SkillsSection from "./SkillsSection";
const Skills = () => {
  return (
    <div
      className="w-full h-auto mx-auto md:px-28 px-8 py-16 dark:bg-slate-800"
      id="skills"
    >
      <div className="md:hidden md:w-1/5 w-full flex justify-center items-start border-l-2 border-gray-400 order-1">
        <PageHeader>Skills</PageHeader>
      </div>

      <div className="w-full md:flex">
        <div className="md:w-4/5 w-full h-auto p-5 mt-2">
          <SkillsSection />
        </div>

        <div className="md:w-1/5 w-full md:h-auto md:flex hidden justify-center items-start border-l-2 border-gray-400">
          <PageHeader>Skills</PageHeader>
        </div>
      </div>
    </div>
  );
};

export default Skills;
