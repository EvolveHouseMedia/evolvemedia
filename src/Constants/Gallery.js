import React, { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { IoMdCloseCircle } from "react-icons/io"
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi"
import "../Components/components.css"
import Commercial from "../contents/Commercial"
import AnimationData from "../contents/Animations"

const Gallery = ({ name, closebtn }) => {
  const [page, setPage] = useState(1)
  const [comImg] = useState(Commercial)

  const totalPages = comImg.length / 10
  const userSelectedPage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage)
    }
  }
  return (
    <div className=" commerrr">
      <div className="modal-content container img-modal ">
        <div className="modalOpener">
          {name === "commercials" ? (
            <div className="imageerr">
              <div className="comspanner">
                <h4 className="namerr">Commercials</h4>
                <span className="closer">
                  {" "}
                  <IoMdCloseCircle
                    onClick={closebtn}
                    className="modal-close"
                    size={30}
                  />
                </span>
              </div>
              {comImg.slice(page * 10 - 10, page * 10).map((c, index) => {
                return (
                  <>
                    <div key={index} className="comimager">
                      <LazyLoadImage
                        effect="blur"
                        src={c}
                        alt="Commercial pics"
                        className="comImg"
                      />
                    </div>
                  </>
                )
              })}
              <div className="pagination">
                <span
                  className={page > 1 ? "pagi" : "hidePage"}
                  onClick={() => userSelectedPage(page - 1)}
                >
                  <BiSolidLeftArrow size={20} />
                </span>
                {[...Array(totalPages)].map((_, i) => {
                  return (
                    <span
                      className={page === i + 1 ? "selected" : "pagi"}
                      onClick={() => userSelectedPage(i + 1)}
                      key={i + 1}
                    >
                      {i + 1}
                    </span>
                  )
                })}
                <span
                  className={page < totalPages ? "pagi" : "hidePage"}
                  onClick={() => userSelectedPage(page + 1)}
                >
                  <BiSolidRightArrow size={20} />
                </span>
              </div>
            </div>
          ) : (
            <div>
              <div className="comspanner">
                <h4 className="namerr"> Animation</h4>
                <span className="closer">
                  {" "}
                  <IoMdCloseCircle
                    onClick={closebtn}
                    className="modal-close"
                    size={30}
                  />
                </span>
              </div>
              <div className="framer">
                {AnimationData.map(({ id, srcs }) => {
                  return (
                    <iframe
                      className="youtube"
                      src={srcs}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery
