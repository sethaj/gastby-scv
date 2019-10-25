import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"

const ProjectCard = ({project}) => {
  console.log(project)
  const {title, period, image} = project.frontmatter
  const {slug} = project.fields

  return (
    <article className="card">
      <h5>{period}</h5>
      <h5>{title}</h5>
      <Link to={slug}>
        <Img fluid={image.childImageSharp.fluid} />
      </Link>
    </article>
  )
}

export default ProjectCard
