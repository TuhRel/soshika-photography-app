import React from 'react'
import Box from '@mui/material/Box'


const Slideshow = [
  {
    image: require('../images/heroSectionImages/bijou-wedding-3.jpg').default,
  },
  {
    image: require('../images/heroSectionImages/bijou-wedding-1.jpg').default,
  },
  {
    image: require('../images/heroSectionImages/bijou-wedding-2.jpg').default,
  },
];

const HeroSlideshow = () => {

  return (
    <>
    <Box sx={{maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
      {Slideshow.map((slide, index) => {
        return (
          <Box sx={{maxWidth: '33.33%', objectFit: 'cover'}} key={index}>
            <img src={slide.image} alt='pic' style={{maxWidth: '100%', padding: '0 10px', maxHeight: 500}} />
          </Box>
        )
      })}
    </Box>
    </>
  )
}

export default HeroSlideshow;