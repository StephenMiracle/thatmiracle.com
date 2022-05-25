import * as React from "react"
 
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import useStoryblok from "../lib/storyblok"
import { sbEditable } from "@storyblok/storyblok-editable"
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ComponentMap } from "../componentMap"
 
const NotFoundPage = ({ location }) => {
  const loc = typeof window !== "undefined" ? window.location : null
  let story = useStoryblok(null, loc)
  const content = story ? story.content : {body: []}
  console.log(content)
 
  return (
    <Layout>
      <Seo title="Home" />
      <div {...sbEditable(story ? story.content : false)}>
        <h1>{story ? content.title : 'Not Found'}</h1>
        {
          content.body.map((comp, idx) => {
            console.log(comp.component)
            return (
              <div key={idx}>
                { ComponentMap[comp.component](comp) }
              </div>
            )
          })
        }
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </div>
    </Layout>
  )
}
 
export default NotFoundPage