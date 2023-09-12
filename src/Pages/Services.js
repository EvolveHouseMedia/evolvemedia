import React, { useState } from "react"
import ServiceList from "../Constants/ServiceList"
import ReactCardFlip from "react-card-flip"

const Services = () => {
  const list = ServiceList
  const [isFlipped, setIsFlipped] = useState([])

  const flipper = (id) => {
    if (isFlipped.includes(id)) {
      setIsFlipped(isFlipped.filter((idd) => idd !== id))
    } else {
      setIsFlipped([...isFlipped, id])
    }
  }

  return (
    <div className="serviceLayout container" id="services">
      <h3 className="commonheading serv">Services</h3>
      <div className="servicesporvided row">
        {list.map((item) => {
          return (
            <div
              key={item.id}
              className="serlets col-12 col-md-6 col-lg-4 mx-5 mx-auto"
            >
              <ReactCardFlip
                className="servlists"
                flipDirection="horizontal"
                isFlipped={isFlipped.includes(item.id)}
              >
                <div
                  className="mainServ card "
                  onClick={() => flipper(item.id)}
                >
                  <img src={item.img} alt="" className="sIcons" />
                  <div className="servTxter">
                    <h4 className="itemheading">{item.title}</h4>
                    <span className="flipo">More Details</span>
                  </div>
                </div>
                <div className="readmore card" onClick={() => flipper(item.id)}>
                  <p className="servcontent">{item.content}</p>
                </div>
              </ReactCardFlip>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
