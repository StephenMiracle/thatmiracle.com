/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

export default function layout ({ children, headerFontColor, backgroundColor, hideLogoOnLoad }) {
  const [hasSent, setHasSent] = React.useState(false)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    setHasSent(true);
  }

  return (
    <>
      <div style={{backgroundColor}}>
        <Header hideLogoOnLoad={hideLogoOnLoad} color={headerFontColor} siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>{children}</main>
          <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
            }}
          >
            <Footer/>
            <div className="bg-white border-t-secondary border-t-4 px-4 pb-12">
              <div id="start" className="max-w-5xl mx-auto mt-16 md:flex flex-col md:flex-row">
                <div className="md:w-1/2">
                <p className="font-cursive max-w-2xl mx-auto text-2xl lg:text-4xl leading-relaxe">Step 1: Get Integration Clarity</p>
                <p className="max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed mt-8">
                  <strong>Download My Free Integration Architecture & Budgeting Template</strong><br />
                  Start working on your integration requirements & get a jumpstart on your design, budget & plan. Download this free template & get started today.
                </p>
                <ul className="text-xl mt-6 px-6">
                  <li className="mb-4 list-disc ">
                    Establish the business requirements.
                  </li>
                  <li className="mb-4 list-disc ">
                    Discover your available options.
                  </li>
                  <li className="mb-4 list-disc ">
                    Determine the budget & timeline.
                  </li>
                  <li className="list-disc ">
                    Prepare for next steps.
                  </li>
                </ul>
                </div>
                <div className="md:w-1/2 md:px-8 pt-6">
                  {
                    !hasSent && (
                      <form  onSubmit={handleFormSubmit} className={hasSent ? 'hidden' : 'block'}>
                        <div className="mb-4">
                          <label 
                            className="block text-gray-700 text-lg font-bold mb-2" 
                            htmlFor="firstName">
                            First Name 
                          </label>
                          <input 
                            value={firstName} 
                            onChange={(evt) => {setFirstName(evt.target.value)}} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="firstName" 
                            type="text" 
                            placeholder="First Name: Jack" />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="lastName">
                            Last Name
                          </label>
                          <input value={lastName} onChange={(evt) => {setLastName(evt.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name: Doe" />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Email
                          </label>
                          <input value={email} onChange={(evt) => {setEmail(evt.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email: jack@needshelp.com" />
                        </div>
                        <div className="mt-6">
                          <button className="shadow font-cursive bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 block w-full text-2xl focus:outline-none focus:shadow-outline" type="submit">
                            Download Template
                          </button>
                        </div>
                      </form>
                    )
                  }
                  {
                    hasSent && (
                      <div className={hasSent ? 'block' : 'hidden'}>
                        <p className="text-center text-gray-700 text-2lg font-bold mb-2">
                          Thank you for your interest in my integration template.
                        </p>
                        <p className="text-center text-gray-700 text-lg mb-2">
                          You should be receiving an email from me soon with the template and how to use. If you don't see it, please check your spam folder. Feel free to email me stephen@thatmiracle.com with any questions.
                        </p>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </footer>
      </div>
    </>
  )
}