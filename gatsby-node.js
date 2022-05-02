const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/modules/blog-entry.tsx')

      resolve(
        graphql(
          `{
            menus: allStoryblokEntry(filter: {field_component: {eq: "menu"}}) {
              edges {
                node {
                  id
                  content
                }
              }
            }
            pages: allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
              edges {
                node {
                  id
                  content
                  full_slug
                }
              }
            }
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

          console.log(result.data)

          const allPosts = result.data?.posts?.edges
          const allPages = result.data?.pages?.edges
          const allMenus = result.data?.menus?.edges

          let menus = []

          if (allMenus) {
            menus = allMenus.map(menu => {
              return {
                id: menu.node.id,
                content: JSON.parse(menu.node.content),
              }
            })
          }

          if (allPages) {
            allPages.forEach(e => {
              console.log(e)
              createPage({
                path: `/${e.node.full_slug}`,
                component: path.resolve('./src/modules/page.tsx'),
                context: {
                  id: e.node.id,
                  content: JSON.parse(e.node.content),
                  menus,
                },
              })
            })
          }

          if (allPosts) {
            allPosts.forEach((entry) => {
              // 👇 the name of content type
              if(entry.slug !== "blog") {
                const page = {
                    path: `/${entry.node.full_slug}`,
                    component: blogPostTemplate,
                    context: {
                      story: entry.node,
                      menus,
                    }
                }
                createPage(page)
              }
            })
          }
        })
      )
    })
}