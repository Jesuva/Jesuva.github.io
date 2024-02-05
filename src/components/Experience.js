import React from "react";

export default function Experience({ experience }) {
  const buildResponsibilitiesList = experience.responsibilities.map(
    (responsibility) => {
      return <li>{responsibility}</li>;
    }
  );
  return (
    <div className="resume-item">
      <h4>{experience.role}</h4>
      <h5>
        {experience.in} - {experience.out}
      </h5>
      <p>
        <em>{experience.company} </em>
      </p>
      <ul>{buildResponsibilitiesList}</ul>
    </div>
  );
}
