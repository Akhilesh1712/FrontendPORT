import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero2 from '../Components/Hero2.js';
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <Hero2 heading="ABOUT." text="I'm a B.TECH 4th-year student" />
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          I'm Akhilesh, a passionate developer with a keen interest in creating innovative solutions. 
          Currently, I am a B.TECH 4th-year student, specializing in full-stack development and data science.
          With hands-on experience in various technologies and a strong track record in competitive programming,
          I am dedicated to continuously improving and exploring new challenges. My projects include 
          full-stack applications, real-time systems, and machine learning models. I am always eager to collaborate 
          and contribute to exciting tech initiatives.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
