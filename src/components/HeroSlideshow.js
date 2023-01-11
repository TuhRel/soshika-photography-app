import React from 'react'
import Box from '@mui/material/Box'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';


const HeroSlideshow = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "heroSectionImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 500, 
            placeholder: BLURRED)
        }
      }
    }
  }
  `)

  return (
    <>
    <Box sx={{maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
      {data?.allFile?.nodes?.map((image, index) => {
        return (
          <Box sx={{maxWidth: '40%', padding: '0px 5px', outline: 'green'}} key={index}>
            <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='alt'/>
          </Box>
        )
      })}
    </Box>
    </>
  )
}

export default HeroSlideshow;