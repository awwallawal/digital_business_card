import React from "react";


function Footer() {
 return (
   <div className="Footer">
      <div className="box-icon" >
          <a href="https://twitter.com/hawwal" target="_blank"><img className="box-icon-image" src="./src/images/icons8-twitter-50.png" alt="" /></a>
      </div>
      <div className="box-icon">
          <a href="https://www.facebook.com/awwallawal?mibextid=ZbWKwL" target="_blank"><img className="box-icon-image" src="./src/images/icons8-facebook-f-50.png" alt="" /></a>
      </div>
      <div className="box-icon">
          <a href="https://www.instagram.com/hawwallawal/" target="_blank"><img className="box-icon-image" src="./src/images/icons8-instagram-26.png" alt="" /></a>
      </div>
      <div className="box-icon">
          <a href="https://github.com/awwallawal" target="_blank"><img className="box-icon-image" src="./src/images/icons8-github-64.png" alt="" /></a>
      </div>
   </div>
 )
}

export { Footer }