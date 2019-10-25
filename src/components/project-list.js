import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ProjectCard from "./project-card"

export const projectQuery = graphql`
query {
  allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "project" } }
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          period
          image {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

const ProjectList = ({data}) => {
  data = useStaticQuery(projectQuery)

  return (
    <section>
      {
        data.allMarkdownRemark.edges.map(({node}) => {
          return <ProjectCard key={node.id} project={node} />
        })
      }
    </section>
  )
}

export default ProjectList
