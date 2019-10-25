import React from "react"
import Img from "gatsby-image"

const ProjectCard = ({project}) => {
  console.log(project)
  const {title, period, image} = project.frontmatter

  return (
    <article>
      <h5>{period}</h5>
      <h5>{title}</h5>
      <Img fluid={image.childImageSharp.fluid} />
    </article>
  )
}

export default ProjectCard
