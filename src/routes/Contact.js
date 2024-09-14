import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Form from '../Components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero2 heading = "CONTACT" text = "Lets have a chat"></Hero2>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default Contact
