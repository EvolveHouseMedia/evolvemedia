import React, { useEffect, useState } from "react"
import WorkImg from "../Images/collag.jpg"
import MobileImg from "../Images/mobileScreen.JPG"
import Gallery from "../Constants/Gallery"
import { FaAngleDown } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
const Work = () => {
  const [btnname, setBtnname] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const triggerClick = (e) => {
    const btnClicked = e.target.id
    setBtnname(btnClicked)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const workImageLoader = () => {
    setIsLoading(false)
  }
  return (
    <div className="workLayout container" id="work">
      <div className="wimager">
        {isLoading && <p>Image Loading....</p>}
        <LazyLoadImage
          effect="blur"
          src={WorkImg}
          alt="WorkImage"
          className="hImg"
          onLoad={workImageLoader}
        />
      </div>
      <div className="wTxter ">
        <h2 className="commonheading"> latest Work </h2>
        <p className="commonPara">
          Take a glimpse into the captivating work we have delivered for our
          clients. Our portfolio showcases our expertise in product shoots,
          animation, and social media management. Each project highlights our
          attention to detail, creativity, and commitment to delivering
          impactful results. We take pride in collaborating with businesses
          across various industries to help them achieve their digital goals.
            
        </p>
            <img className="mobilescreen" src={MobileImg} alt="mobileBanner" />
            <p className="explore">
             Click below to view more <br /> <FaAngleDown size={25} /></p>
        <div className="btns">
          <button id="commercials" className="btnn comm" onClick={triggerClick}>
            Commercials
          </button>
          <button id="animations" className="btnn anim" onClick={triggerClick}>
            Animations
          </button>
        </div>
        {isModalOpen && <Gallery name={btnname} closebtn={closeModal} />}
      </div>
    </div>
  )
}

export default Work
