import React, { useState } from "react"
import "../Components/components.css"
const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  const validateEmail = emailRegex.test(email)
  const handleEmail = (e) => {
    const userValue = e.target.value
    setEmail(userValue)
  }

  const submitNewsletter = (e) => {
    e.preventDefault();
    if (email.length >= 3 && !validateEmail) {
      setMessage("*Please Enter Valid Email address")
    } else {
      setMessage("Thankyou for Subscribing")
      setEmail("")
    }
  }

  return (
    <div className="testimonials newsletter">
      <div className="container">
        <h2 className="commonheading news">Sign up for our newsletter now!</h2>
        <input
          className="inputere"
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="Enter your email"
        />
        <button onClick={submitNewsletter} className="btner">
          Subscribe Now
        </button>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Newsletter
