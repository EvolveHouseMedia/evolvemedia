import React, { useState } from "react"
import { HiPlus, HiMinus } from "react-icons/hi"
const FAQ = () => {
  const List = [
    {
      id: 1,
      question: "What services does Evolve House Media offer in photography?",
      answer:
        "Evolve House Media specializes in a wide range of photography services, including corporate photography, product photography, event photography, and portrait photography. Our team of skilled photographers can capture stunning visuals that will enhance your brand image and make a lasting impression on your target audience.",
    },
    {
      id: 2,
      question: "Does Evolve House Media provide videography services?",
      answer:
        "Yes, absolutely! At Evolve House Media, we offer professional videography services tailored to meet your specific business needs. Our team excels in creating high-quality videos such as promotional videos, corporate videos, event coverage, and product videos. We utilize state-of-the-art equipment and innovative techniques to produce engaging videos that effectively convey your message.",
    },
    {
      id: 3,
      question: "What animation services are offered by Evolve House Media?",
      answer:
        "Evolve House Media is adept at providing cutting-edge animation services that can bring your ideas to life. From 2D and 3D animations to motion graphics and visual effects, our skilled animators can create captivating visuals that leave a lasting impact. Whether you need animations for marketing purposes, explainer videos, or interactive presentations, we have the expertise to deliver top-notch results.",
    },
  ]

  const [clickedQuestionId, setClickedQuestionId] = useState([])
  const showContent = (id) => {
    if (clickedQuestionId.includes(id)) {
      setClickedQuestionId(clickedQuestionId.filter((item) => item !== id))
    } else {
      setClickedQuestionId([...clickedQuestionId, id])
    }
  }

  return (
    <div className="testimonials container">
      <h2 className="commonheading marginer">Frequently Asked Questions</h2>
      {List.map(({ id, question, answer }) => (
        <div className="divverr">
          <div className="faqs col-12" key={id}>
            <div className="flxer" onClick={() => showContent(id)}>
              <h3 className="headd quest">{question}</h3>
              {clickedQuestionId.includes(id) ? (
                <HiMinus size={30} />
              ) : (
                <HiPlus size={30} />
              )}
            </div>
            {clickedQuestionId.includes(id) && <p>{answer}</p>}
          </div>{" "}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default FAQ
