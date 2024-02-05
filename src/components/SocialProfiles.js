import React from "react";
import { URLs } from "../utilities/constants";

export default function SocialProfiles() {
  return (
    <div className="social-links mt-3 text-center">
      <a href={URLs.LINKEDIN} className="linkedin" target="_blank">
        <i className="bx bxl-linkedin"></i>
      </a>
      <a href={URLs.GITHUB} className="github" target="_blank">
        <i className="bx bxl-github"></i>
      </a>
      <a href={URLs.INSTAGRAM} className="instagram" target="_blank">
        <i className="bx bxl-instagram"></i>
      </a>
    </div>
  );
}
