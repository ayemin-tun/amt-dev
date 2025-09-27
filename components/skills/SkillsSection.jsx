"use client";

import { useState } from "react";
import ShowAnimation from "../ShowAnimation";
import SkillAnimatedProgress from "./SkillAnimatedProgress";
const SkillsSection = () => {
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 80 },
    { name: "Javascript", percent: 70 },
    { name: "Bootstrap", percent: 85 },
    { name: "Tailwind", percent: 95 },
    { name: "PHP", percent: 80 },
    { name: "laravel", percent: 85 },
    { name: "React", percent: 70 },
    { name: "Next Js", percent: 75 },
    { name: "Astro Js", percent: 65 },
    { name: "Python", percent: 50 },
    { name: "Django", percent: 60 },
  ];

  const [skill, setSkill] = useState(null);
  const [percent, setPercent] = useState(null);
  const [animate, setAnimate] = useState(true);
  const [allSkills, setAllSKills] = useState(false);
  // Function to handle click event and update state
  const handleSkillClick = (name, percent) => {
    setAnimate(true);
    setSkill(name);
    setPercent(percent);
  };
  const handleAllSkillsClick = () => {
    setAllSKills(true);
    setAnimate(true);
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <button
          className={`px-3 py-1 m-0 cursor-pointer ${allSkills
            ? "bg-white text-black dark:bg-gray-700 dark:text-white"
            : "bg-gray-700 dark:bg-white text-white dark:text-black"
            } rounded-s-md`}
          onClick={() => setAllSKills(false)}
        >
          Skills
        </button>
        <button
          className={`px-3 py-1 m-0 ${allSkills
            ? "bg-gray-700 text-white dark:bg-white dark:text-black"
            : "bg-white dark:bg-gray-700 text-black dark:text-white"
            } rounded-e-md`}
          onClick={() => handleAllSkillsClick()}
        >
          Details
        </button>
      </div>
      {!allSkills && (
        <>
          <div className="mt-14">
            <div
              className="flex flex-wrap gap-2 md:justify-end justify-start items-center"
              data-aos="zoom-out"
            >
              {skills.map((sk, index) => (
                <ShowAnimation key={index}>
                  <div
                    className={` text-white px-3 py-2 rounded-lg md:w-24 md:h-20 flex justify-center items-center hover:bg-slate-400 transition-colors duration-500 cursor-pointer ${skill === sk.name ? "bg-slate-700" : "bg-slate-500"
                      }`}
                    onClick={() => handleSkillClick(sk.name, sk.percent)}
                  >
                    <p>{sk.name}</p>
                  </div>
                </ShowAnimation>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col md:items-end items-start w-full">
            <SkillAnimatedProgress
              skill={skill}
              percent={percent}
              isAnimate={animate}
            />
          </div>
        </>
      )}

      {allSkills && (
        <div className="mt-14 flex flex-col md:items-end items-start w-full">
          {skills.map((skill, index) => (
            <SkillAnimatedProgress
              key={index}
              skill={skill.name}
              percent={skill.percent}
              isAnimate={animate}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SkillsSection;
