import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import "../Components/components.css"
const Modalbtn = ({ btnName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
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

  return (
    <div className="getintouch">
      <button
        title="Schedule a call"
        onClick={openModal}
        className="gitbtn"
        type="button"
      >
        {btnName}
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  )
}

export default Modalbtn
