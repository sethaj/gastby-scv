import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

const Project = ({data}) => {
  const {html} = data.markdownRemark
  const {title, period, image} = data.markdownRemark.frontmatter
  return (
    <section>
      <h2>{title}</h2>
      <h4>{period}</h4>
      <Img fluid={image.childImageSharp.fluid} />
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        period
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Project
