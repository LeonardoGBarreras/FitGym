import React from 'react'
import './Footerr.css'
import GitHub from "../../assets/github.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
const Footerr = () => {
  return (
    <div className="Footer-container">
    <hr/>
    <div className="blur blur-f"></div>
    <div className="footerr">
      <div className="social-links">  
            <img src={GitHub} alt="" />
            <img src={LinkedIn} alt="" />
      </div>
      <div className="logo-f">
          <img src={Logo} alt="" />
      </div>
  
      </div>
    </div>
  )
}

export default Footerr