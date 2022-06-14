import * as React from "react"

import Seo from "../components/seo"



export default function Page() {
  return (
    <div style={{ background: "#0e213a", minHeight: "100vh" }}>
      <div className="container mx-auto pt-4 lg:pt-20 py-4 px-4 max-w-full">
        <Seo title="Stephen Miracle" />
        <div className="lg:max-w-4xl mx-auto text-white lg:mt-16">
          <p className="font-cursive text-xl lg:text-6xl leading-loose">Hi! My name is Stephen Miracle.</p> 
          <p className="text-xl lg:text-4xl mt-16 leading-loose">Are you losing potential high-return enterprise customer opportunities because you lack effective integration, implementation & adoption strategies?</p>
          <p className="text-xl lg:text-3xl mt-16 leading-loose">I can help you with that.</p>
          <p className="text-lg lg:text-4xl leading-relaxed my-16">I provide clarity to fast-growing data & cloud technology products wanting to increase customer integration, adoption & stickiness.</p>
        </div>
        <div className=" px-6 lg:max-w-3xl mx-auto mt-16">
          <p className="font-cursive px-6 py-6 bg-white max-w-4xl mx-auto text-xl text-lg lg:text-3xl leading-relaxed">Your product can expect to generate a <strong>5X increase in lifetime customer value</strong> while <strong>reducing onboarding time & costs by more than 76% with an effective integration architecture solution.</strong></p>
        </div>
        <div className="lg:max-w-4xl mx-auto text-white lg:mt-16">
          <p className=" max-w-4xl mx-auto text-lg lg:text-6xl text-center leading-relaxe">Here's some interesting info...</p>
          <ul>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">Over 80% of enterprise Business Operations leaders say data integration is critical to ongoing operations.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">67% of enterprises are relying on data integration to support analytics and BI platforms today, and 24% are planning to in the next 12 months.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">65% of organizations prefer to deploy data integration solutions from cloud platforms or hybrid cloud.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">poor integration across applications is seen as the second main barrier to the effective application of digital technology in procurement, with cumulatively 45% of respondents ranking this factor as one of their top three issues. </li>
          </ul>

        </div>
      </div>
    </div>
  )
}
