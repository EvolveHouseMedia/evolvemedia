import React from "react"
import Logo from "../Images/logo.png"
import "./components.css"
const Splash = () => {
  return (
    <div
      className="splashcontainer container"
      height="100vh"
    >
      <img
        src={Logo}
        alt="company-logo"
        className="splashimg"
        width={150}
        height={150}
      />
    </div>
  )
}

export default Splash
