import React from 'react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'

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
  return (
    <PortfolioSlideshowContainer>
      <Box sx={{overflow: 'scroll', display: 'flex', flexDirection: 'row', maxWidth: '1200px'}}>
        {Slideshow.map((item, index) => {
          return (
            <img src={item.image} alt='slideshow' style={{maxHeight: '500px'}} key={index}/>
          )
        })}
      </Box>
    </PortfolioSlideshowContainer>
  )
}

export default PortfolioSlideshow;