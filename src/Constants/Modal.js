import React from "react"
import Form from "./Form"
import Contact from "../Images/contactt.json"
import "../Components/components.css"
import { IoMdCloseCircle } from "react-icons/io"
import Lottie from "lottie-react"
function Modal({ onClose }) {
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
        <div className="modalContents">
          <div className="modalBgImg">
            <Lottie animationData={Contact} className="ContactImage" />
          </div>
          <div className="modalForm">
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
