const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/modules/blog-entry.tsx')

      resolve(
        graphql(
          `{
            posts: allStoryblokEntry(filter: {field_component: {eq: "Post"}}) {
              edges {
                node {
                  id
                  name
                  slug
                  field_component
                  full_slug
                  content
                }
              }
            }
          }`
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const allPosts = result.data.posts.edges

          allPosts.forEach((entry) => {
            // 👇 the name of content type
            if(entry.slug !== "blog") {
              const page = {
                  path: `/${entry.node.full_slug}`,
                  component: blogPostTemplate,
                  context: {
                    story: entry.node
                  }
              }
              createPage(page)
            }
          })
        })
      )
    })
}