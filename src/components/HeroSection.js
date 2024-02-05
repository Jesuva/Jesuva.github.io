import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Jesuva S Arockiadoss</h1>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Software Engineer, Cloud Solution Architect, Full Stack Developer, Pianist"
          ></span>
        </p>
      </div>
    </section>
  );
}
