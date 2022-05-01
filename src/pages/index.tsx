import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProfileCard from "../components/profile-card/profileCard"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ProfileCard />
  </Layout>
)

export default IndexPage
