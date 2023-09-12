import React from "react"
import "../Components/components.css"
const Form = () => {
  return (
    <div>
      <h4 className="getin">Get in touch</h4>
      <p className="formparaa">
        Have a question, need assistance? We're just a message away!
      </p>
      <form action="">
        <input
          type="text"
          className="inputer"
          placeholder="Enter your name"
          required
        />
        <br />
        <input
          type="text"
          className="inputer"
          placeholder="Enter your email"
          required
        />
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{10,}"
          className="inputer"
          placeholder="Enter your mobile"
          required
        />
        <br />
        <textarea
          className="inputer"
          name="message"
          id="mess"
          cols="30"
          rows="5"
          placeholder="Leave us a message"
        ></textarea>
        <br />
        <div className="getInTouch">
          <button className="gitbtn sendbtn" type="button">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
