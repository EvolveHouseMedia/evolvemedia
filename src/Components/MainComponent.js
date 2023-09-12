import React, { useEffect, useState } from "react"

import Body from "./Body"
import "./components.css"
import Shimmer from "./Shimmer"
const MainComponent = () => {
  const [shimmer, setShimmer] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShimmer(false)
    }, 1000)
  }, [])
  return <div className="mainactivity">{shimmer ? <Shimmer /> : <Body />}</div>
}

export default MainComponent
