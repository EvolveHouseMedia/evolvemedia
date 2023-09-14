import React, { useEffect, useState } from "react"

import Body from "./Body"
import "./components.css"
import Shimmer from "./Shimmer"
const MainComponent = () => {
  const [shimmer, setShimmer] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShimmer(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return <div className="mainactivity">{shimmer ? <Shimmer /> : <Body />}</div>
}

export default MainComponent
