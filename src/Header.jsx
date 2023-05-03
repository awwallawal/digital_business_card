import React from "react";
import HeaderImage  from "../src/images/Awwal.jpg"

function Header() {
 return (
   <>
    <div className="Header">
      <img src={ HeaderImage } alt="a passport photograph" className="Header-img"/>
    </div>
   </>
 )
}

export { Header }