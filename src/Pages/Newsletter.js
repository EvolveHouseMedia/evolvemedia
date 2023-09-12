import React from "react"

const Newsletter = () => {
  return (
    <div className="testimonials newsletter">
      <div className="container">
        <h2 className="commonheading news">Sign up for our newsletter now!</h2>
        <input
          className="inputere"
          type="text"
          placeholder="Enter your email"
        />
        <button className="btner">Subscribe Now</button>
      </div>
    </div>
  )
}

export default Newsletter
