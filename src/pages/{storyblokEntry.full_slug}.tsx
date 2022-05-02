import * as React from "react"
import { ComponentMap } from "../componentMap"
import { sbEditable } from "@storyblok/storyblok-editable"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import useStoryblok from "../lib/storyblok"


export default function Page({ data }) {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
  const content = story ? story.content : {}

  return (
    <Layout>
      <Seo title="Home" />
      <div {...sbEditable(content)}>
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      id
      name
      full_slug
      content
    }
  }
`