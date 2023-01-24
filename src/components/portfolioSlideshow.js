import React from 'react'
import Box from '@mui/material/Box'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


const PortfolioSlideshow = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "portfolioSlideshow"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 500, 
            placeholder: BLURRED,
            layout: FIXED
          )
        }
      }
    }
  }
  `)

  return (
    <Box sx={{width: '100%', display: 'flex',height: '550px', overflow: 'scroll', alignItems: 'center'}}>
        {data?.allFile?.nodes?.map((image, index) => {
          return (
            <Box key={index}>
            <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='slideshow'/>
            </Box>
          )
        })}
    </Box>
  )
}

export default PortfolioSlideshow;