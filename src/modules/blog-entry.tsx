import React from 'react'
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.cjs'
import Header from '../components/header'
//@ts-ignore
export default function BlogEntry({ pageContext, location }) {
  const { title, intro, long_text, image } = JSON.parse(pageContext.story.content)
  const resolver = new RichTextResolver()
  const html = resolver.render(long_text)
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="mx-auto lg:w-6/12 pt-10 pb-5 ">
          <h1 className="text-5xl text-lightblue font-bold">{ title }</h1>
        </div>
        <img
          width="400"
          src={`https://${ image }`}
          alt={ image }
        /> 
        <div className="lg:w-6/12 mx-auto max-w-full blog-content" dangerouslySetInnerHTML={{ __html: html }} /> 
      </div>
    </div>
  )
}