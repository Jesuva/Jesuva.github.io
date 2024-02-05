import React from "react";
import {
  programmingLanguageDescription,
  programmingLanguages,
  skillDescription,
  skillList,
} from "../utilities/constants";
import Skill from "./Skill";

export default function Skills() {
  const buildSkillsSection = (flag) => {
    let start = 0,
      end = 0;
    let skillListLength = skillList.length;
    if (flag === 0) {
      start = 0;
      end = skillListLength / 2;
    } else {
      start = skillListLength / 2;
      end = skillListLength;
    }
    return skillList.slice(start, end).map((skill) => {
      return <Skill skill={skill} />;
    });
  };

  const buildProgrammingLangList = (flag) => {
    let start = 0,
      end = 0;
    let programmingLangListLen = programmingLanguages.length;
    if (flag === 0) {
      start = 0;
      end = programmingLangListLen / 2;
    } else {
      start = programmingLangListLen / 2;
      end = programmingLangListLen;
    }
    return programmingLanguages.slice(start, end).map((language) => {
      return (
        <div className="progress">
          <span className="skill">{language}</span>
        </div>
      );
    });
  };
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>{skillDescription}</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            {buildSkillsSection(0)}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {buildSkillsSection(1)}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-title">
          <h2>Programming Languages</h2>
          <p>{programmingLanguageDescription}</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            {buildProgrammingLangList(0)}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {buildProgrammingLangList(1)}
          </div>
        </div>
      </div>
    </section>
  );
}
