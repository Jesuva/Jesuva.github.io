import React from "react";

export default function ServiceItem({ service, delay }) {
  return (
    <div
      className="col-lg-4 col-md-6 icon-box"
      data-aos="fade-up"
      data-aos-delay={delay * 100}
    >
      <div className="icon">
        <i className={service.icon}></i>
      </div>
      <h4 className="title">
        <span>{service.name}</span>
      </h4>
      <p className="description">{service.description}</p>
    </div>
  );
}
