import "./Heroimg.css";
import React from 'react'
import background from "../assets/black-paper-background.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">

        <div className="mask">
            <img className="intro-img" src={background} alt="backgroundimg"/>
        </div>
        <div className="content">
            <p>
                HI, I'M A FULLSTACK DEVELOPER..
            </p>
            <div>
                <Link to="/Projects" className="btn">Projects</Link>
                <Link to="/Contact" className="btn">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimg
