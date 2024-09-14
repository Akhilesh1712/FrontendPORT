
import React from "react";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import "./index.css";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>

       <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Projects" element={<Projects></Projects>}/>
        <Route path="/About" element={<About></About>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>
       </Routes>
        
     
    </>
  );
}

export default App;
