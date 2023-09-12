import React from "react"

const Shimmer = () => {
  return (
    <div>
      <div className="navbarShimmer">
        <span className="slogi"></span>
        <ul className="ul">
          <li className="li"></li>
          <li className="li"></li>
          <li className="li"></li>
          <li className="li"></li>
          <li className="li"></li>
          <button className="bt"></button>
          <button className="bt"></button>
        </ul>
      </div>
      <div className="homeShimmer">
        {/* <div className="shimmerImager">
          <span className="hShimmerImage"></span>
        </div> */}
        <div className="shimmerTexter">
          <div className="shimmerHeading">
            <h1 className="shimmertitler"></h1>
            <h1 className="shimmertitler"></h1>
          </div>
          <p className="shimmerpara"></p>
          <p className="shimmerpara"></p>
          <p className="shimmerpara"></p>
          <p className="shimmerpara"></p>
        </div>
      </div>
    </div>
  )
}

export default Shimmer
