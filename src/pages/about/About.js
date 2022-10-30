import React from 'react'
import Navbar from '../../navbar/Navbar'
import hand from "../../assets/hand.gif"

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <h1>Hello</h1>
       <img src={hand} alt="" />
        <p>
          My name is Meltem. I prepared this page for improve myself in react.
        </p>
        <p>Please don't hesitate to contact with me.</p>
        <p>You can find connect links in contact page.</p>
      </div>
    </div>
  );
}

export default About