import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/project-list"

export const IndexQuery = graphql`
query {
  markdownRemark(frontmatter: { templateKey: { eq: "homepage" } }) {
    frontmatter {
      titleSection {
        heading
    		heroSection {
          heading
          text
          backgroundImage {
          	childImageSharp {
              fluid(quality:90, maxWidth:4160){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const titleSection = data.markdownRemark.frontmatter.titleSection
  const title = titleSection.heading
  //const text = titleSection.heroSection.text
  //const image =titleSection.heroSection.backgroundImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectList />
    </Layout>
  )
}

export default IndexPage
