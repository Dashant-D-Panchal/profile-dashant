import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TypingEffect from "./TypingEffect";

function Home() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".line1", { y: 80, opacity: 0, duration: 1, delay: 0.5 });
    tl.from(".line2", { y: 80, opacity: 0, duration: 1, delay: 0.5 });
    tl.from(".line3", { y: 80, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".righthome img", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    });
  });
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedeatails">
          <div className="line1">I'M</div>
          <div className="line2">DASHANT PANCHAL</div>
          <div className="line3">
            <div className="line3">
              <TypingEffect
                texts={[
                  "FRONTEND DEVELOPER",
                  "WEB DESIGNER",
                  "REACT JS ENTHUSIAST",
                ]}
                speed={150}
                pause={1500}
              />
            </div>
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
