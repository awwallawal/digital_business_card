import React from "react";
import Email from "../src/images/icons8-email-48.png";
import LinkedIn from "../src/images/icons8-linkedin-2-48.png";

function MainContent() {
 return (
   <div className="MainContent">
    <div className="inner-one" >

      <h2 className="item-one">Lawal Awwal</h2>
      <p className="item-two">Frontend Developer</p>
      <p className="item-three"><a href="https://github.com/awwallawal/digital_business_card.git" target="_blank"><p className="weblink">awwallawal.website</p></a></p>
  
      
      <div className="btn-container">
        <div className="button email">
          <a href="mailto: awwallawal@gmail.com" target="_blank"><img src={Email} alt="email icon" className="img-size aa"/></a>
          <button><a href="mailto: awwallawal@gmail.com"><h3 className="email-link">Email</h3></a></button>
        </div>

        <div className="button linkedin">
          <a href="https://www.linkedin.com/in/lawal-awwal-1a296134/" target="_blank"><img src={LinkedIn} alt="linkedin icon" className="img-size ab" /></a>
          <button> <a href="https://www.linkedin.com/in/lawal-awwal-1a296134/" target="_blank"><h3 className="linkedin-link">LinkedIn</h3></a> </button>
        </div>
      </div>
      
    </div>

    <div className="inner-two">
      <h2 className="about">About</h2>
      <p className="about-para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I am always on the lookout for new things to learn.</p>
      <h2 className="interest">Interests</h2>
      <p className="interest-para">Gardening expert. Football aficionado. Reader. Internet fanatic. Steak buff. Entrepreneur. Travel geek. Coffee fanatic.</p>
    </div>
   </div>
 )
}

export { MainContent }
