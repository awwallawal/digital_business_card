import React from "react";
import { Picture } from "../src/Awwal.jpg"

function Header() {
 return (
   <>
    <div className="Header">
      <img src={Picture} alt="a passport photograph" className="Header-img"/>
    </div>
   </>
 )
}

export { Header }