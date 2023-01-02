import React from 'react'
import logo from  "../../picture/logoapp.png"
import setingsicon from "../../picture/settingslogo.png"
import "../Navbar/Navbar.css"
function Navbar() {
  return (
      <div className="app-header">
        <img src={logo} alt="" />
        <input type="text" name="" id="import-video"  placeholder='Import video url'/>
        <img src={setingsicon} alt="" />
      </div>
    
  )
    
}

export default Navbar