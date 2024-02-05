import React from "react";
import Navbar from "./Navbar";
import SocialProfiles from "./SocialProfiles";
import profileImg from "../assets/img/profile1.jpg";

export default function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={profileImg} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="index.html">Jesuva S</a>
          </h1>
          <SocialProfiles />
        </div>

        <Navbar />
      </div>
    </header>
  );
}
