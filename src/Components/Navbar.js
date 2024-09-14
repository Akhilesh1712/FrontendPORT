import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";


import React, { useState } from 'react'

const Navbar = () => {

    const [click,setClick] = useState(false);
    const handleclick = () => setClick(!click);
    const [color,setcolor] = useState(false);
    const changecolor = () =>{
        if(window.scrollY >= 100){
            setcolor(true);
        }else{
            setcolor(false);
        }
    };
    window.addEventListener("scroll",changecolor);
     
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
             <h1>Akhilesh Kumar</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleclick}>

            {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : (<FaBars size={20} style={{color:"#fff"}} />)}
            
            
        </div>
    </div>
  )
}

export default Navbar