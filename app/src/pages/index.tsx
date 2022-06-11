import * as React from "react"

import Seo from "../components/seo"



export default function Page() {
  return (
    <div style={{ background: "#0e213a", minHeight: "100vh" }}>
      <div className="container mx-auto pt-4 lg:pt-20 py-4 px-4 max-w-full">
        <Seo title="Home" />
        <div className="lg:max-w-4xl mx-auto text-white lg:mt-16">
          <p className="text-xl lg:text-6xl leading-loose">Hi! My name is Stephen Miracle.</p> 
          <p className="text-lg lg:text-4xl leading-relaxed my-20">I provide clarity & direction to innovative technology teams to increase their customer stickiness, adoption & integration.</p>
        </div>
        <div className="bg-white px-6 py-8 lg:max-w-5xl mx-auto mt-24">
          <p className="max-w-4xl mx-auto text-xl text-lg lg:text-3xl leading-relaxed">These solutions generate a 5X increase in lifetime customer value while reducing customer integration, onboarding time & costs by more than 76%.</p>
        </div>
      </div>
    </div>
  )
}
