import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Cards from '../Components/Cards'
const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero2 heading = "MY PROJECTS.." text="Some of my course work"></Hero2>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default Projects
