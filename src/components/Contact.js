import React from "react";
import SocialProfiles from "./SocialProfiles";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Reach out to any of my social media accounts for any queries!</p>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Tuticorin, Tamil Nadu, India</p>
              </div>

              {/* <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div> */}

              {/* <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126179.16171510439!2d78.06361581353622!3d8.776774524535723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee67b4ad764f%3A0x2443e6dc90ee7d3!2sThoothukudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706041727990!5m2!1sen!2sin"
                width="100%"
                height="290px"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
