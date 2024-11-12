import React from "react";
import { TypeAnimation } from "react-type-animation";
import Portfolio_img from "../assets/images/vector-img.png";
import ResumeDownloader from "../components/child_components/ResumeDownloader";
import SocialIcons from "../components/child_components/SocialIcons";
import AboutMe from "./AboutMe";

const name = "Ajay Adhane";
const designation = "React.js Developer";

export default function HomeSection() {
  return (
    <>
      <div className="container-fluid" id="homeSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
              <div>
                <div className="typing-effect">
                  <h2>Welcome! I’m Ajay,</h2>
                  <span className="text-effect">I’m</span>
                  <TypeAnimation
                    className="TypeAnimation"
                    sequence={[
                      "React.js Developer",
                      2000,
                      "Frontend Developer",
                      2000,
                      "Web Developer",
                      2000,
                      "Next.js Developer",
                      2000,
                    ]}
                    speed={50}
                    deletionSpeed={30}
                    repeat={Infinity}
                  />
                  <h2>Let’s explore my work together!</h2>
                  <>
                    <ResumeDownloader />
                  </>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
              <figure className="profile">
                <div className="overlay">
                  <div className="about">
                    <h4>{name}</h4>
                    <span>{designation}</span>
                  </div>
                  <>
                    <SocialIcons />
                  </>
                </div>
                <img
                  src={Portfolio_img}
                  alt="Portfolio"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div>
        <AboutMe/>
      </div>
    </>
  );
}
