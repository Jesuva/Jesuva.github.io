import React from "react";
import { serviceList, servicesDescription } from "../utilities/constants";
import ServiceItem from "./ServiceItem";

export default function Services() {
  const buildServiceSection = serviceList.map((service, index) => {
    return <ServiceItem service={service} delay={index} />;
  });
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>{servicesDescription}</p>
        </div>

        <div className="row">{buildServiceSection}</div>
      </div>
    </section>
  );
}
