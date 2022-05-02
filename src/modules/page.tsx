import * as React from "react"
import { ComponentMap } from "../componentMap"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({pageContext}) => {
  const {content, menus} = pageContext
  console.log(content)

  return (
    <Layout>
      <Seo title="Home" />
      {
        content.body.map((comp, idx) => {
          return (
            <div key={idx}>
              { ComponentMap[comp.component](comp) }
            </div>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
