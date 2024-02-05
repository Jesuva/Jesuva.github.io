import React from "react";

export default function StatsItem({ stat, item }) {
  return (
    <div
      className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
      data-aos="fade-up"
      data-aos-delay={item * 100}
    >
      <div className="count-box">
        <i className={stat.icon}></i>
        <span
          data-purecounter-start="0"
          data-purecounter-end={stat.count}
          data-purecounter-duration="1"
          className="purecounter"
        ></span>
        <p>
          <strong>{stat.boldDescription}</strong> {stat.description}
        </p>
      </div>
    </div>
  );
}
