import {React } from "react";
import * as FaIcons from "react-icons/fa";

function Navbar() {
  
  return (
    <div>
      <div className="navbar">
        <FaIcons.FaBell />
      </div>
      <div className='nav-name'>
        <h1>Ogoluwa</h1>
      </div>
    </div>
  )
}

export default Navbar
