import React from "react"
import { FaYoutube } from "react-icons/fa6"
import { BiLogoFacebookCircle, BiSolidPhoneCall } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"
import { HiMail, HiLocationMarker } from "react-icons/hi"
import ReactWhatsapp from "react-whatsapp"
import { Link } from "react-router-dom"
import { IoLogoWhatsapp } from "react-icons/io"

const Footer = () => {
  return (
    <div className="footerLayout">
      <div className="footerLayoutt">
        <div className="flogo">
          <h4 className="fcommonh">Evolve House Media </h4>
          <p className="fparaa">
            Unlock your brand's potential with Evolve House Media – where
            creativity and digital excellence meet!
          </p>
          <div>
            <span>Chat with us, with just one click</span>
            <ReactWhatsapp
              title="Chat Now"
              className="footerwaLink"
              number="+91 8884266808"
              message=" "
              // onClick={handleClick}
            >
              <IoLogoWhatsapp className="ftriconerrr " size={30} />
            </ReactWhatsapp>
          </div>
        </div>
        <div className="fcontact">
          <h4 className="fcommonh">Contact us </h4>

          <p className="hre">
            <Link className="hree" to="">
              <BiSolidPhoneCall size={25} /> 8884266808 / 9886410274 /
              9113078119
            </Link>
          </p>
          <p className="hre">
            <Link className="hree" to="mailto:evolvehousemedia@gmail.com">
              <HiMail size={25} /> evolvehousemedia@gmail.com
            </Link>
          </p>
          <p className="hre">
            <Link className="hree" to="mailto:evolvehousemedia@gmail.com">
              <HiLocationMarker size={25} />
              Bangalore, Karnataka
            </Link>
          </p>
        </div>
        <div className="ficons">
          <h4 className="fcommonh">Follow us </h4>
          <div className="iconfler">
            <Link
              to="https://www.instagram.com/evolvehousemedia/"
              target="_blank"
            >
              <div className="flexerrr">
                <BiLogoFacebookCircle size={30} /> <br />
                <span className="flexerTxt">Facebook</span>
              </div>
            </Link>
            <Link
              to="https://www.instagram.com/evolvehousemedia/"
              target="_blank"
            >
              <div className="flexerrr">
                <AiFillInstagram size={30} /> <br />
                <span className="flexerTxt">Instagram</span>
              </div>
            </Link>
            <Link
              to="https://www.youtube.com/@EvolveHouseMedia/"
              target="_blank"
            >
              <div className="flexerrr">
                <FaYoutube size={30} />
                <br />
                <span className="flexerTxt">Youtube</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
