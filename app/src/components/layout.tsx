/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

export default function layout ({ children, headerFontColor, backgroundColor, hideLogoOnLoad }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
            <div className="bg-white border-t-secondary border-t-4 px-4">
              <div id="start" className="lg-max-w-3xl mx-auto mt-16">
                <p className="font-cursive max-w-2xl mx-auto text-2xl lg:text-5xl leading-relaxe">Work With Me</p>
                <p className="max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed mt-8">
                  <strong>Schedule an intro call</strong><br />
                  Ready to discuss your product integration & implementation requirements? Schedule your intro call today with the link below. We'll discuss the current state of your product integration architecture, your future goals, and determine whether we should continue into the strategy & design sessions.
                </p>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed my-16">
                  <a target="_blank" className="font-cursive max-w-3xl mx-auto btn btn-outline bg-primary text-white border-2 py-4 px-10" href="https://bit.ly/3OgGrQH">SCHEDULE CALL</a>
                </p>
              </div>
            </div>
          </footer>
      </div>
    </>
  )
}