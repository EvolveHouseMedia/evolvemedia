import { useEffect, useState } from "react"

const useModalopen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
//   const openModal = () => {
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//   }
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

  return isModalOpen
}

export default useModalopen
