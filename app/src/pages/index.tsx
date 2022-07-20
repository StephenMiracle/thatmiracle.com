import * as React from "react"

import Seo from "../components/seo"
import Layout from '../components/layout'



export default function Page() {
  return (
    <Layout hideLogoOnLoad="true" backgroundColor="#1f213a" headerFontColor="white">
      <div className="container mx-auto pt-4 pt-20 py-4 px-4 max-w-full">
        <Seo title="Stephen Miracle" />
        <div className="mx-auto  lg:mt-16 text-white text-center mb-4 lg:max-w-3xl">
              <p className="font-cursive text-2xl lg:text-4xl leading-loose">Hi! Stephen <em className="font-cursive text-secondary">"that"</em>  Miracle here<span className="text-secondary">.</span></p> 
        </div>
        <div className="lg:max-w-5xl mx-auto text-white">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="/images/me.jpeg" 
                alt="Stephen Miracle" 
                className="mx-auto w-48 h-48 rounded-full md:w-full md:h-full object-cover" />
            </div>
            <div className="lg:px-6">
              <p className="max-w-3xl mx-auto text-xl lg:text-5xl mt-8 lg:mt-16">How confident are you in your software integrations?</p>
              <div className="w-full flex flex-row mt-6 lg:mt-20 max-w-lg text-center mx-auto mb-10 lg:mb-24">
                <p className="xs:w-1/2 lg:w-auto max-w-3xl mx-auto text-xl lg:text-3xl leading-loose">I can help you with that.</p>
                <p className="xs:w-1/2 lg:w-auto max-w-3xl mx-auto text-lg leading-relaxed">
                  <a className="font-cursive max-w-3xl mx-auto btn btn-outline border-secondary text-secondary border-2 py-2 px-4" href="#start">Let's talk</a>
                </p>
              </div>
            </div>
          </div>
          <div className=" px-6 lg:max-w-3xl mx-auto mt-8 lg:mt-16 mb-24">
            <p className="text-primary font-cursive px-6 py-6 bg-white max-w-4xl mx-auto text-xl text-2lg lg:text-3xl lg:leading-relaxed">Generate a <strong><span className="bg-secondary">5X increase</span> in lifetime customer value</strong> and a <strong><span className="bg-secondary">64%</span> increase in productivity</strong> while <strong>reducing operational costs more than <span className="bg-secondary">74%</span> with better software integrations.</strong></p>
          </div>
          <div className="mt-8 mb-20 lg:max-w4xl mx-auto">
            <p className="text-white text-4xl mb-2"><span className="text-secondary inline-block text-3xl mr-3">></span> Who am I?</p>
            <p className="text-white text-xl lg:text-3xl font-cursive">I help frustrated cloud-native technology teams <span className="bg-secondary text-primary">deploy well-architected cloud-native integrations that deliver confidence</span> in security, uptime, performance & results. Build integrations with <span className="text-secondary">99.99%</span> uptime, <span className="text-secondary">1 million</span> transactions / second & real-time notifications that provides satisfaction for all business users, customers & stakeholders. </p>
          </div>
          <div className="flex mb-32 flex-col md:flex-row text-center justify-center">
            <div className="w-full md:w-1/3">
              <img className="block mx-auto" src="/images/azure.png" alt="Azure" style={{height: '100px'}} />
            </div>
            <div className="w-full md:w-1/3 text-center ">
              <img className="block mx-auto" src="/images/aws.png" style={{height: '100px'}} alt="AWS"  />
            </div>
            <div className="w-full md:w-1/3">
              <img className="block mx-auto" src="/images/gcp.png" alt="GCP" style={{height: '100px'}} />
            </div>
          </div>
          <div className="mt-8 mb-20 lg:max-w4xl mx-auto">
            <p className="text-white text-5xl mb-2"><span className="text-secondary inline-block text-3xl mr-3">></span> What do I do?</p>
            <p className="text-white text-xl lg:text-3xl font-cursive">I connect complicated software systems together. Officially, you can call me an "Integration Architect". But, that isn't very descriptive. What I really do is design, plan & lead integration projects that require working with many different pieces. I enjoy making complex things work together. </p>
          </div>
        </div>
        <div className="lg:max-w-3xl mx-auto text-white lg:mt-24 mt-10">
          <p className=" after:content-[' '] after:block after:h-1 after:mt-6 after:mx-auto after:max-w-lg after:bg-secondary max-w-4xl mx-auto text-2xl lg:text-6xl text-center leading-relaxe">Here's some interesting info</p>
          <ul>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">Over <span className="text-secondary">80%</span> of enterprise Business Operations leaders say data integration is critical to ongoing operations.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8"><span className="text-secondary">67%</span> of enterprises are relying on data integration to support analytics and BI platforms today, and 24% are planning to in the next 12 months.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8"><span className="text-secondary">65%</span> of organizations prefer to <span className="bg-secondary text-primary">deploy data integration solutions from cloud platforms</span> or hybrid cloud.</li>
            <li className="list-disc font-cursive text-lg lg:text-3xl leading-relaxed my-8">poor integration across applications is seen as the second main barrier to the effective application of technology, with cumulatively 45% of respondents ranking this factor as one of their <span className="bg-secondary text-primary">top three issues</span>. </li>
          </ul>
        </div>
        <div className="mt-20 mb-10 lg:max-w-5xl mx-auto">
          <p className="text-white text-5xl mb-2"><span className="text-secondary inline-block text-3xl mr-3">></span> Where can you find my fingerprints?</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-20 max-w-6xl mx-auto">
          <div className="text-white text-xl md:w-1/2 px-4">
            <p className="text-3xl">Food & Ag Tech</p>
            <p className="text-xl text-left">Food & agtech is a passion of mine growing up in a family of farming. I love tech that connects the supply chain from the farm, to the brand, retailer, restaurant and all the way to the consumer.</p>
          </div>
          <div className="text-white text-xl md:w-1/2 px-4">
            <p className="text-3xl">Healthcare Tech</p>
            <p className="text-xl text-left">Healthcare Tech is a unique beast when it comes to integrations. Data privacy, security & interoperability is no joke. These types of complex integrations is where I love to live.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center mb-20 max-w-6xl mx-auto">
          <div className="text-white text-xl md:w-1/2 px-4">
            <p className="text-3xl">Fintech</p>
            <p className="text-xl text-left">I've been able to work on some really amazing projects in mortgage, investment, crypto, banking & ecommerce while living in a large financial hub. These projects are enjoyable and require significant testing & attention to detail.</p>
          </div>
          <div className="text-white text-xl md:w-1/2 px-4">
            <p className="text-3xl">Martech & Adtech</p>
            <p className="text-xl text-left">Analytics, data, market automation, emails, CMS, advertising, what else? This space is massive and requires a very well orchestrated integration system. Be smart on how to make it fit.</p>
          </div>
        </div>
        </div>
        <div className="mx-auto text-white lg:mt-24 mt-16 mb-24">
          <div className="lg:block max-w-3xl mx-auto justify-center">
            <p className="before:content-[' '] before:block before:h-1 before:mb-10 before:mx-auto before:max-w-lg before:bg-secondary after:content-[' '] after:block after:h-1 after:mt-10 after:mx-auto after:max-w-lg text-center after:bg-secondary text-lg lg:text-4xl leading-relaxed my-24">
              Stop worrying about integrations and feel confident in your software.
            </p>
          </div>
        </div>
      
    </Layout>
  )
}
