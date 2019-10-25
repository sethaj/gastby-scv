import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/project-list"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProjectList />
  </Layout>
)

export default IndexPage
