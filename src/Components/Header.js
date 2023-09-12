import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import Logo from "../Images/logo.png"
import Modalbtn from "../Constants/Modalbtn"
import { HiMenuAlt2 } from "react-icons/hi"
import { MdOutlineCancel } from "react-icons/md"
import { HiOutlineHome } from "react-icons/hi"
import { GoOrganization } from "react-icons/go"
import { MdWorkOutline } from "react-icons/md"
import { FiCamera } from "react-icons/fi"
import { IoLogoWhatsapp } from "react-icons/io"
import ReactWhatsapp from "react-whatsapp"

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = () => {
    if (isMobileScreen) {
      setIsClicked(!isClicked)
    }
  }

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isClicked])

  return (
    <header className="header">
      <div className="imager">
        <img src={Logo} alt="" width={50} height={50} className="evolvelogo" />
      </div>
      <div className="navlinks">
        <ul className={isClicked ? "displayer " : "navigateLinks"}>
          <li className="links">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={handleClick}
            >
              <HiOutlineHome className="iconerrr" size={35} />
              Home
            </Link>
          </li>

          <li className="links">
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={handleClick}
            >
              <FiCamera className="iconerrr" size={35} />
              Services
            </Link>
          </li>
          <li className="links">
            <Link
              to="work"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={handleClick}
            >
              <MdWorkOutline className="iconerrr" size={35} />
              Work
            </Link>
          </li>
          <li className="links">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={handleClick}
            >
              <GoOrganization className="iconerrr" size={35} />
              About
            </Link>
          </li>
          <li className="links">
            <ReactWhatsapp
              title="Chat Now"
              className="walink"
              number="+91 8884266808"
              message="Hello "
              onClick={handleClick}
            >
              <IoLogoWhatsapp className="iconerrr" size={35} />
              Chat on Whatsapp
            </ReactWhatsapp>
          </li>
          <div className="getintouch">
            <Modalbtn btnName="Get In touch" onClick={handleClick} />
          </div>
        </ul>
      </div>
      <div className="iconer">
        {isClicked ? (
          <MdOutlineCancel onClick={handleClick} className="iconee" size={30} />
        ) : (
          <HiMenuAlt2 onClick={handleClick} className="iconee" size={30} />
        )}
      </div>
    </header>
  )
}

export default Header
