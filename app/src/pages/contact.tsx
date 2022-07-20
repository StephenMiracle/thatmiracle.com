import React from 'react'
import Layout from '../components/layout'


export default function page() {
  return (
    <Layout backgroundColor="#342247" headerFontColor={'white'} hideLogoOnLoad={false}>
    <div className="min-h-screen pt-32">
      <div className="container mx-auto">
      <h1>My Background</h1>
      <p>This is the about page</p>
      </div>
    </div>
    </Layout>
  )
}