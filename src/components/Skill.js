import React from "react";

export default function Skill({ skill }) {
  return (
    <div className="progress">
      <span className="skill">
        {skill.name} <i className="val">{skill.points}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={skill.points}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
