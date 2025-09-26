import React from "react";
import "./About.css";
import Card from "../card/Card";
import hc from "../../assets/HC-removebg-preview.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import {useGSAP} from "@gsap/react"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
    gsap.from(".circle", {x: -100  , opacity: 0, duration: 2, delay: 0.5, stagger:1, scrollTrigger:{trigger:".circle", scroll:"body", scrub:2, start:"top 80%", 
    end:"top 40%", } })
    gsap.from(".line", {x: -100  , opacity: 0, duration: 2, delay: 0.5, stagger:1, scrollTrigger:{trigger:".circle", scroll:"body", scrub:2, start:"top 80%", 
    end:"top 40%", } })
    gsap.from(".abutdeatails", {x: -100  , opacity: 0, duration: 2, delay: 0.5, stagger:2, scrollTrigger:{trigger:".circle", scroll:"body", scrub:2, start:"top 80%", 
    end:"top 40%", } })
    gsap.from(".rightabout", {y: 100, opacity: 0, duration: 2, delay: 0.5, stagger:2, scrollTrigger:{trigger:".circle", scroll:"body", scrub:2, start:"top 80%", 
    end:"top 40%", } })
  })
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="abutdeatails">
          <div className="personalinfo">
            <h1>PERSONAL INFO</h1>
            <ul>
              <li>
                <span>Name</span> : Dashant Panchal
              </li>
              <li>
                <span>Age</span> : 21 Years
              </li>
              <li>
                <span>Lenguage Known</span> : Hindi, English, Gujarati
              </li>
              <li>
                <span>Contact</span> : +91 6351524436
              </li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Course</span> : Full Stack Development
              </li>
              <li>
                <span>Focus</span> : Frontend Development
              </li>
              <li>
                <span>Institute</span> : Skytech
              </li>
              <li>
                <span>Duration</span> : 2024 – 2025
              </li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                 HTML, CSS
              </li>
              <li>
                 Java Script
              </li>
              <li>
                 BootStrap
              </li>
              <li>
                 React
              </li>
              <li>
                 APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title={"HTML AND CSS"} image={hc}/>
        <Card title={"JAVASCRIPT"} image={js}/>
        <Card title={"REACT"} image={react}/>
      </div>
    </div>
  );
}

export default About;
