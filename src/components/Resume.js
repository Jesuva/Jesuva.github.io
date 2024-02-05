import React from "react";
import {
  address,
  educationList,
  experienceList,
  name,
  resumeDescription,
} from "../utilities/constants";
import EducationItem from "./EducationItem";
import Experience from "./Experience";

export default function Resume() {
  const buildEducationTimeline = educationList.map((education) => {
    return <EducationItem education={education} />;
  });

  const buildCareerTimeline = experienceList.map((experience) => {
    return <Experience experience={experience} />;
  });

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>{resumeDescription}</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>{name}</h4>
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>{address}</li>
                <li>email</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {buildEducationTimeline}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            {buildCareerTimeline}
          </div>
        </div>
      </div>
    </section>
  );
}
