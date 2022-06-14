import * as React from "react"

import Seo from "../components/seo"



export default function Page() {
  return (
    <div style={{ background: "#1f213a", minHeight: "100vh" }}>
      <div className="container mx-auto pt-4 lg:pt-20 py-4 px-4 max-w-full">
        <Seo title="Stephen Miracle" />
        <div className="lg:max-w-4xl mx-auto text-white lg:mt-16">
          <p className="font-cursive text-xl lg:text-6xl leading-loose">Hi! Stephen "that" Miracle here<span className="text-secondary">.</span></p> 
          <p className="max-w-3xl mx-auto text-xl lg:text-4xl mt-16 leading-loose">How effective are your technology product's integration, implementation & adoption solutions?</p>
          <div className="w-full flex flex-row mt-20 max-w-lg text-center mx-auto mb-24">
          <p className="xs:w-1/2 lg:w-auto max-w-3xl mx-auto text-xl lg:text-3xl leading-loose">I can help you with that.</p>
          <p className="xs:w-1/2 lg:w-auto max-w-3xl mx-auto text-lg leading-relaxed">
            <a className="max-w-3xl mx-auto btn btn-outline border-secondary text-secondary border-2 py-2 px-4" href="#start">Work with Me</a>
          </p>
          </div>
          <p className="before:content-[' '] before:block before:h-1 before:mb-10 before:mx-auto before:max-w-lg before:bg-secondary after:content-[' '] after:block after:h-1 after:mt-10 after:mx-auto after:max-w-lg text-center after:bg-secondary text-lg lg:text-4xl leading-relaxed my-24">
            Get direction on improving your product adoption, stickiness & lifetime value using proven systems, architectures, processes & strategies.</p>
        </div>
        <div className=" px-6 lg:max-w-3xl mx-auto mt-16">
          <p className="font-cursive px-6 py-6 bg-white max-w-4xl mx-auto text-xl text-lg lg:text-3xl leading-relaxed">Your product can expect to generate a <strong>5X increase in lifetime customer value</strong> while <strong>reducing onboarding time & costs by more than 76% with an effective integration architecture solution.</strong></p>
        </div>
        <div className="lg:max-w-4xl mx-auto text-white lg:mt-16">
          <p className=" after:content-[' '] after:block after:h-1 after:mt-6 after:mx-auto after:max-w-lg after:bg-secondary max-w-4xl mx-auto text-lg lg:text-6xl text-center leading-relaxe">Here's some interesting info...</p>
          <ul>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">Over 80% of enterprise Business Operations leaders say data integration is critical to ongoing operations.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">67% of enterprises are relying on data integration to support analytics and BI platforms today, and 24% are planning to in the next 12 months.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">65% of organizations prefer to deploy data integration solutions from cloud platforms or hybrid cloud.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">poor integration across applications is seen as the second main barrier to the effective application of digital technology in procurement, with cumulatively 45% of respondents ranking this factor as one of their top three issues. </li>
          </ul>
        </div>
      </div>
      <div className="bg-white border-t-secondary border-t-4">
        <div id="start" className="lg-max-w-3xl mx-auto mt-16">
          <p className="font-cursive max-w-2xl mx-auto text-lg lg:text-6xl leading-relaxe">Work With Me</p>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed mt-8">
            <strong>Schedule an intro call</strong><br />
            Ready to discuss your product integration & implementation requirements? Schedule your intro call today with the link below. Discuss the current state of your product integration architecture and your future goals. We'll share our services to see what may best align with your needs.
          </p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed my-16">
            <a target="_blank" className="max-w-3xl mx-auto btn btn-outline bg-primary text-white border-2 py-2 px-4" href="https://bit.ly/3OgGrQH">SCHEDULE CALL</a>
          </p>
        </div>
      </div>
    </div>
  )
}
