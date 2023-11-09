import React, { useState } from "react"
import Form from "./Form"
import Contact from "../Images/contactt.json"
import Thanks from "../Images/thank.json"
import "../Components/components.css"
import { IoMdCloseCircle } from "react-icons/io"
import Lottie from "lottie-react"
function Modal({ onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  return (
    <div className="modal-container">
      <div className="modal-content getinform">
        <div className="closer">
          <IoMdCloseCircle
            className="modal-close"
            onClick={onClose}
            size={30}
          />
        </div>
        {!isSubmitted ? (
          <div className="modalContents">
            <div className="modalBgImg ">
              <Lottie animationData={Contact} className="ContactImage " />
            </div>
            <div className="modalForm">
              <Form isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
            </div>
          </div>
        ) : (
          <div className="modalContents">
            <div className="modalBgImg ">
              <Lottie
                animationData={Thanks}
                className="ContactImage"
              />
            </div>
            <div className="modalForm replytxt">
              <h1 className="replyMessageHeading">
                Thank you for your response. Our team will get in
                touch with you shortly
              </h1>

              <p className="replymessage">
                We extend a warm invitation to peruse our extensive portfolio,
                where you can explore the diverse range of projects we've
                undertaken and the remarkable achievements we've earned over the
                years.
              </p>
              <h6>Team - Evolve House Media</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
