import React from "react";
import Card from "../card/Card";
import "./Projects.css";
import va from "../../assets/phinics.png";
import FW from "../../assets/quiz.png";
import cb from "../../assets/calc.png";
import tti from "../../assets/drag&drop.png";
import form from "../../assets/form.png";
import flesh from "../../assets/flesh.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from(".slider", {
      y: -100,
      opacity: 0,
      duration: 2,
      delay: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scrub: 2,
        start: "top 80%",
        end: "top 40%",
      },
    });
  });

  return (
    <div id="projects">
      <h1 id="pera">MY PROJECTS AND TASKS</h1>
      <div className="slider">
        <div className="box1">
          <Card title="FLESH STUDIO" image={flesh} link="/flashstudio/home.html" />
          <Card title="E-COMMERCE WEBSITE" image={va} link="/phinics/home.html" />
          <Card title="FORM SUBMITION" image={form} link="/form/form.html" />
        </div>
        <div className="box2">
          <Card title="QUIZ GAME WEBSITE" image={FW} link="/quizgame/quiz.html" />
          <Card title="CALCULATOR" image={cb} link="/calculator/calculator.html" />
          <Card title="DRAG AND DROP GAME" image={tti} link="/drag-and-drop/dragon-drop.html" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
