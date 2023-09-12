import React from "react"

const Testimonials = () => {
  const List = [
    {
      id: 1,
      name: "Shekar",
      content:
        "Evolve House Media did an amazing job capturing the essence of our event through their photography. The moments they captured were simply breathtaking and truly brought our event to life.",
    },
    {
      id: 2,
      name: "Ravi",
      content:
        "We were blown away by the video production services provided by Evolve House Media. They delivered a high-quality video that perfectly showcased our products and services. The attention to detail and creativity in their work is truly commendable.",
    },
    {
      id: 3,
      name: "Vinay",
      content:
        "Evolve House Media's animation services took our storytelling to the next level. They created captivating animations that perfectly conveyed our brand's message. The animations helped us engage with our audience in a unique and impactful way.",
    },
  ]

  return (
    <div className="testimonials container row mx-auto">
      <h2 className="commonheading  ">What People are saying...</h2>
      {List.map(({ id, name, content }) => (
        <div className="divver col-sm-12 col-md-4 col-lg-4">
          <div className=" feedbacker " key={id}>
                  <h3 className="headd">{name}</h3>
            <p>"{content}"</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testimonials
