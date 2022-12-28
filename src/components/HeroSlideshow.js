import React, { useState } from 'react'
import styled from '@emotion/styled';
import Box from '@mui/material/Box'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const LeftArrow = styled(IoIosArrowBack)`
  position: relative;
  left: -75px;
  bottom: 0;
  font-size: 2rem;
  color: #17141f;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
const RightArrow = styled(IoIosArrowForward)`
  position: relative;
  right: -75px;
  bottom: 0;
  font-size: 2rem;
  color: #17141f;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
const SliderNav = styled.div`
  display: flex;
  /* align-self: center; */
  justify-content: center;
  width: 100%;
`


const Slideshow = [
  // {
  //   image: require('../images/weddingSlides/gabby_wedding_1.webp').default,
  // },
  // {
  //   image: require('../images/weddingSlides/gabby_wedding_2.webp').default,
  // },
  {
    image: require('../images/weddingSlides/hillary_wedding_1.webp').default,
  },
  {
    image: require('../images/weddingSlides/hillary_wedding_2.webp').default,
  },
  {
    image: require('../images/weddingSlides/hillary_wedding_2.webp').default,
  },
];

const HeroSlideshow = () => {

  // const [current, setCurrent] = useState(0)
  // const length = Slideshow.length

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1)
  // }

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1)
  // }

  // console.log(current)

  // if(!Array.isArray(Slideshow) || Slideshow.length <= 0) {
  //   return null
  // }

  return (
    <>
    <Box sx={{maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
      {Slideshow.map((slide, index) => {
        return (
          <Box sx={{maxWidth: '33.33%', objectFit: 'cover'}} key={index}>
            <img src={slide.image} alt='pic' style={{maxWidth: '100%', padding: '0 10px', height: 400}} />
          </Box>
          // <Box sx={{maxWidth: '33.33%', objectFit: 'cover'}} className={index === current ? 'slide active' : 'slide'} key={index}>
          //   {index === current && (<img src={slide.image} alt='pic' style={{maxWidth: '100%', padding: '5px'}} />)}
          // </Box>
        )
      })}
    </Box>
    {/* <SliderNav>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
    </SliderNav> */}
    </>
  )
}

export default HeroSlideshow;