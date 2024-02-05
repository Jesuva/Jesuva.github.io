import React from "react";

export default function EducationItem({ education }) {
  return (
    <div className="resume-item">
      <h4>{education.title}</h4>
      <h5>
        {education.in} - {education.out}
      </h5>
      <p>
        <em>{education.school}</em>
      </p>
      <p>{education.description}</p>
    </div>
  );
}
