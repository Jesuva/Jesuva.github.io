import React from "react";
import { statDescription, statsList } from "../utilities/constants";
import StatsItem from "./StatsItem";

export default function Stats() {
  const buildStatsList = statsList.map((stat, index) => {
    return <StatsItem stat={stat} item={index} />;
  });
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Stats</h2>
          <p>{statDescription}</p>
        </div>

        <div className="row no-gutters">{buildStatsList}</div>
      </div>
    </section>
  );
}
