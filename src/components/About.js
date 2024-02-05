import React from "react";
import profileImg from "../assets/img/profile-img1.jpg";
import {
  aboutText,
  myRoles,
  aboutMyRoles,
  websiteURL,
  techPassionText,
} from "../utilities/constants";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>{aboutText}</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            {/* <img src={profileImg} className="img-fluid" alt="" /> */}
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{myRoles}</h3>
            <p className="fst-italic">{aboutMyRoles}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <span>
                      <a href={websiteURL} target="_blank">
                        {websiteURL}
                      </a>
                    </span>
                  </li> */}
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong>{" "}
                    <span>Tuticorin, Tamil Nadu, India</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>B Tech - Information Technology</span>
                  </li>
                  {/* <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li> */}
                </ul>
              </div>
            </div>
            <p>{techPassionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
