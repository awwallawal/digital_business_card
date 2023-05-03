import React from "react";
import { Twitter } from "../src/icons8-twitter-50.png";
import { Facebook } from "../src/icons8-facebook-f-50.png";
import { Instagram } from "../src/icons8-instagram-26.png";
import { GitHub } from "../src/icons8-github-64.png";


function Footer() {
 return (
   <div className="Footer">
      <div className="box-icon" >
          <a href="https://twitter.com/hawwal" target="_blank"><img className="box-icon-image" src={Twitter} alt="" /></a>
      </div>
      <div className="box-icon">
          <a href="https://www.facebook.com/awwallawal?mibextid=ZbWKwL" target="_blank"><img className="box-icon-image" src={Facebook} alt="" /></a>
      </div>
      <div className="box-icon">
          <a href="https://www.instagram.com/hawwallawal/" target="_blank"><img className="box-icon-image" src={Instagram} alt="" /></a>
      </div>
      <div className="box-icon">
          <a href="https://github.com/awwallawal" target="_blank"><img className="box-icon-image" src={GitHub} alt="" /></a>
      </div>
   </div>
 )
}

export { Footer }