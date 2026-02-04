import React from "react";  
import images from './../assets/image/logo.png';
import './Navbar.css';

function Navbar() {
return (
  <div className="navbar">
    
    <div className="logo">
      <img src={images} alt="" />
      <h1>SIDHDHARTH PANDYA</h1>
    </div>

    <div className="menubar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blogs</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Resume</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    
  </div>
);
}
export default Navbar;