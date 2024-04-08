"use client";
import SkillPage from "@/components/Skill/skillPage";
import { BackSkill, FrontSkill, FullStack, Skills } from "@/utils/skills";

export default function Skill() {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center mt-[5rem] gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}>
      <div className="flex flex-row items-center justify-around mt-4 gap-5">
        {BackSkill.map((skill, i) => {
          return (
            <SkillPage
              key={i}
              src={skill.src}
              width={skill.width}
              height={skill.height}
              i={i}
            />
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-around mt-4 gap-5">
        {FrontSkill.map((skill, i) => {
          return (
            <SkillPage
              key={i}
              src={skill.src}
              width={skill.width}
              height={skill.height}
              i={i}
            />
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-around mt-4 gap-5">
        {Skills.map((skill, i) => {
          return (
            <SkillPage
              key={i}
              src={skill.src}
              width={skill.width}
              height={skill.height}
              i={i}
            />
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-around mt-4 gap-5">
        {FullStack.map((skill, i) => {
          return (
            <SkillPage
              key={i}
              src={skill.src}
              width={skill.width}
              height={skill.height}
              i={i}
            />
          );
        })}
      </div>

      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video 
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay

          />
        </div>
      </div> */}
    </div>
  );
}
