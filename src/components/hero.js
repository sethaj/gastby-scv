import React from "react"
import BackgroundImage from "gatsby-background-image"

const Hero = ({title, text, image, children}) => {
  return (
    <BackgroundImage className="bg-image" fluid={image}>
      <div className="hero">
        <p>{title}</p>
        <p>{text}</p>
      </div>
      {children}
    </BackgroundImage>
  )
}

export default Hero
