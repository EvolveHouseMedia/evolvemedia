import React from "react"
import Logo from "../Images/logo.png"
import { FaYoutube } from "react-icons/fa6"
import { BiLogoFacebookCircle, BiSolidPhoneCall } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"
import { HiMail } from "react-icons/hi"
const Footer = () => {
  return (
    <div className="footerLayout">
      <div className="footerLayoutt container-lg">
        <div className="flogo">
          <img
            src={Logo}
            alt="Footer Icon"
            className="fimg"
            width={70}
            height={70}
          />
          <p className="fparaa">
            Unlock your brand's potential with Evolve House Media – where
            creativity and digital excellence meet!
          </p>
        </div>
        <div className="fcontact">
          <h4 className="fcommonh">Contact us </h4>

          <span className="hre">
            <a className="hree" href="tel:+91 8884268808">
              <BiSolidPhoneCall size={25} /> 8884268808
            </a>
          </span>
          <br />
          <span className="hre">
            <a className="hree" href="mailto:evolvehousemedia@gmail.com">
              <HiMail size={25} /> evolvehousemedia@gmail.com
            </a>
          </span>
        </div>
        <div className="ficons">
          <h4 className="fcommonh">Follow us </h4>
          <div className="iconfler">
            <BiLogoFacebookCircle size={30} />
            <AiFillInstagram size={30} />
            <FaYoutube size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
