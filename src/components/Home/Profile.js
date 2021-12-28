import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import { Button  } from "../Section/ButtonElements";

export default function Profile() {
  return (
    <div className="profile-container row">
      <div className="Profile-background"></div>
      {/* <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div> */}
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
            <div className="col-icon">
              <a href="#">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-detailname">
            <span className="primary-text">
              {""}
              Hello, I'am <span className="highlighted-text">Abhishek</span>
            </span>
          </div>
          <div className="profile-detailrole">
            <span className="primary-text">
              <h2>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developer",
                    1000,
                    "Python Developer",
                    1000,
                    "Django Developer",
                    1000,
                    ".NET Developer",
                    1000,
                  ]}
                />
              </h2>
            </span>
            <span className="profile-detaildesc primary-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing
            </span>
          </div>
          <div className="profile-options">
            <Button to='contact' smooth={true} 
              duration={500} spy={true}
              exact="true" offset={-60}
              primary={1}
              dark={1} >
              CONTACT ME
            </Button>
            {/* <a href="Abhishek_Resume.pdf" download="Abhishek_Resume.pdf">
              Get Resume
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
