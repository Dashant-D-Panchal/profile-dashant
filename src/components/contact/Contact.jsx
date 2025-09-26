import React from 'react'
import "./Contact.css"
import con from '../../assets/contact.png'
import {useGSAP} from "@gsap/react"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    gsap.from(".rightcontact", {y: 100  , opacity: 0, duration: 2, delay: 0.5, stagger:1, scrollTrigger:{trigger:".rightcontact", scroll:"body", scrub:2, start:"top 60%", 
    end:"top 40%", } })
    gsap.from(".leftcontact", {x: -100  , opacity: 0, duration: 2, delay: 0.5, stagger:1, scrollTrigger:{trigger:".rightcontact", scroll:"body", scrub:2, start:"top 60%", 
    end:"top 40%", } })
  })
  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={con} alt="" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/mzzandpr" method='POST'>
            <input name='username' type="text" placeholder='Name' required/>
            <input name='Email' type="email" placeholder='Email' required/>
            <textarea name="message" id="textarea" placeholder='Message' required></textarea>
            <input type="submit" id='btn' value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
