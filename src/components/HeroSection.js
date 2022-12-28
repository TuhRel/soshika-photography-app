import React from 'react'
import styled from '@emotion/styled';
import HeroSlideshow from './HeroSlideshow';

const HeroContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: #f9f9f9; */
  /* background-image: url('../images/weddingSlides/gabby_wedding_1.webp'); */

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
    backdrop-filter: blur(3px);
    background: linear-gradient(180deg, #f9f9f920 0%, #f9f9f960 100%), linear-gradient(180deg, #f9f9f920 0%, #f9f9f960 100%);
    z-index: 2;
    }
`
const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    overflow: hidden;
`
const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #f9f9f9;
`
const HeroContentWrapper = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: 70% 30%;
  padding-top: 50px;
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 11;
`
const HeroText = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #17141f;

  h1 {
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 200;
    padding-bottom: 10px;
  }
  h2 {
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 200;
  }
  p {
    letter-spacing: 2px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-weight: 200;
    font-size: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 1.3rem;
    letter-spacing: 2px;
  }
  h4 {
    font-size: 1.8rem;
    font-weight: 200;
    letter-spacing: 2px;
    font-family: 'Bad Script';
  }
`


const HeroSection = () => {

  // const theme = useTheme()

  // const [activeStep, setActiveStep] = useState(0)
  // const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  // const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  // const handleStepChange = (step) => {
  //     setActiveStep(step);
  // };



  return (
    <HeroContainer id='home'>
        <HeroBg>
          <VideoBg src={require('../images/weddingSlides/gabby_wedding_1.webp').default} />
        </HeroBg>
      <HeroContentWrapper>
        <HeroContent>
          <HeroSlideshow />
          {/* <Box sx={{maxWidth: '100%', textAlign: 'center', display: 'flex'}}>
            {HeroSlideshow.map((slide) => (
              <Box sx={{maxWidth: '33.33%', objectFit: 'cover'}}>
              <img src={slide.image} alt='pic' style={{maxWidth: '100%', height: '300px', padding: '0 5px', overflow: 'hidden'}} />
              </Box>
            ))}
          </Box> */}
          {/* {HeroSlideshow.map((slide) => {
            <Box
            component="img"
            sx={{
            height: '100%',
            display: 'block',
            maxWidth: '33.33%',
            objectFit: 'cover',
            // objectPosition: '0 80%',
            overflow: 'scroll',
            // width: '100%',
            }}
            src={slide.image}
            alt='pic'/>
            <>
            <img src={slide.image} alt='pic' style={{objectFit: 'cover', width: '33.33%', height: '100%'}}/>
            </>
          })} */}
        </HeroContent>
        <HeroContent style={{paddingTop: '60px'}}>
          <HeroText>
            <h1>EST.</h1>
            <h2>2020</h2>
            <p>ORLANDO & <br/> LOCAL AREA <br/> PHOTOGRAPHER</p>
            <h3>SoShika</h3>
            <h4>Photography</h4>
          </HeroText>
        </HeroContent>
      </HeroContentWrapper>
    </HeroContainer>
  )
}

export default HeroSection;