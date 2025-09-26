import React, { useRef } from 'react'
import "./Nav.css"
import { Link} from "react-scroll"
import {useGSAP} from "@gsap/react"
import {gsap} from "gsap"
function Nav() {
  let menu = useRef()
  let mobile = useRef()
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from("nav h1", {y: -100, opacity: 0, duration: 1})
    tl.from("nav ul li", {y: -50, opacity: 0, duration: 1, delay: 0.5, stagger: 0.2})
  })
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className='desktopmenu'>
        <Link to='home' smooth={true} activeClass='active' spy={true} duration={500}><li>Home</li></Link>
        <Link to='about' smooth={true} activeClass='active' spy={true} duration={500}><li>About</li></Link>
        <Link to='projects' smooth={true} activeClass='active' spy={true} duration={500}><li>Projects</li></Link>
        <Link to='contact'  smooth={true} activeClass='active' spy={true} duration={500}><li>Contact</li></Link>
      </ul>
      <div className="hamburger" ref={menu} onClick={() =>{
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <ul className='mobilemenu' ref={mobile}>
        <Link to='home' smooth={true} activeClass='active' spy={true} duration={500}><li>Home</li></Link>
        <Link to='about' smooth={true} activeClass='active' spy={true} duration={500}><li>About</li></Link>
        <Link to='projects' smooth={true} activeClass='active' spy={true} duration={500}><li>Projects</li></Link>
        <Link to='contact'  smooth={true} activeClass='active' spy={true} duration={500}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
