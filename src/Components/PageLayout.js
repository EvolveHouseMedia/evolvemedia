import React from "react"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Services from "../Pages/Services"
import Work from "../Pages/Work"
import Testimonials from "../Pages/Testimonials"
import FAQ from "../Pages/FAQ"
import Newsletter from "../Pages/Newsletter"

const PageLayout = () => {
  return (
    <div className="pageLayout">
      <Home />
      <Services />
      <Work />
      <Testimonials />
      <About />
      <FAQ />
      <Newsletter />
    </div>
  )
}

export default PageLayout
