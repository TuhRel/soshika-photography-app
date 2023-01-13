import React from 'react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const PortfolioSlideshowContainer = styled.div`
  width: 100%;
  height: 500px;
`

const Slideshow = [
  {image: require('../images/portfolioSlideshow/portfolio-1.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-2.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-3.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-4.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-5.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-6.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-7.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-8.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-9.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-10.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-11.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-12.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-13.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-14.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-15.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-16.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-17.jpg').default},
  {image: require('../images/portfolioSlideshow/portfolio-18.jpg').default},
]

const PortfolioSlideshow = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "portfolioSlideshow"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 1200, 
            placeholder: BLURRED
          )
        }
      }
    }
  }
  `)

  return (
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'scroll', height: '800px'}}>
        {data?.allFile?.nodes?.map((image, index) => {
          return (
            <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', objectFit: 'cover'}} key={index}>
            <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='slideshow'/>
            </Box>
          )
        })}
    </Box>
  )
}

export default PortfolioSlideshow;