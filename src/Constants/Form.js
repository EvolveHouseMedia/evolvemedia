import React, { useState } from "react"
import "../Components/components.css"
import axios from "axios"
const Form = ({ isSubmitted, setIsSubmitted }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  
  const UserEnquiryAPI =
    "https://getform.io/f/78b52496-29bc-494c-9f23-40e39220b968"

  // Validating User Inputs
  const nameRegex = /^[A-Za-z\s'-]+$/
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  const phoneRegex = /^(\+?91|0)?[6789]\d{9}$/

  const validateName = nameRegex.test(name)
  const validateEmail = emailRegex.test(email)
  const validatePhone = phoneRegex.test(phone)

  const handleName = (e) => {
    const userValue = e.target.value
    setName(userValue)
  }
  const handleEmail = (e) => {
    const userValue = e.target.value
    setEmail(userValue)
  }
  const handlePhone = (e) => {
    const userValue = e.target.value
    setPhone(userValue)
  }
  const handleMessage = (e) => {
    const userValue = e.target.value
    setMessage(userValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateEmail && validateName && validatePhone) {
      try {
        const response = await axios.post(
          UserEnquiryAPI,
          {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
          { headers: { Accept: "application/json" } }
        )
        setName("")
        setEmail("")
        setMessage("")
        setPhone("")
        setIsSubmitted(true)
      } catch (error) {
        console.error(error)
      }
    } else {
      alert("Oops please enter a valid details")
    }
  }

  return (
    <>
      <div>
        <h4 className="getin">Get in touch</h4>
        <p className="formparaa">
          Have a question, need assistance? We're just a message away!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="inputer"
            placeholder="Name - ex: John "
            value={name}
            onChange={handleName}
            title="Enter Name"
          />
          <label className="errorTxt">
            {name.length >= 3 && !validateName
              ? "*Please Enter Valid name"
              : ""}
          </label>
          <input
            type="text"
            name="email"
            className="inputer"
            placeholder="Email - ex:john@gmail.com"
            value={email}
            onChange={handleEmail}
            disabled={validateName ? false : true}
            title={validateName ? "" : "Please Enter Name and to Continue"}
          />
          <label className="errorTxt">
            {email.length >= 3 && !validateEmail
              ? "*Please Enter Valid Email Address"
              : ""}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="inputer"
            placeholder="Phone - ex:+91 9876543210"
            value={phone}
            onChange={handlePhone}
            disabled={validateName && validateEmail ? false : true}
            title={
              validateName && validateEmail
                ? ""
                : "Please Enter Name and Email to Continue"
            }
          />
          <label className="errorTxt">
            {phone.length >= 3 && !validatePhone
              ? "*Please Enter Valid Phone Number"
              : ""}
          </label>
          <textarea
            className="inputer"
            name="message"
            value={message}
            onChange={handleMessage}
            id="mess"
            cols="30"
            rows="5"
            placeholder="Leave us a message"
          ></textarea>
          <br />
          <div className="getInTouch">
            <button className=" sendbtn">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
