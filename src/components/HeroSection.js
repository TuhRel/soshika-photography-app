import React from 'react'
import styled from '@emotion/styled';
import HeroSlideshow from './HeroSlideshow';
import heroImage from '../images/backgroundImages/heroBackground-2.jpg'

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
`
const HeroBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(3px);
    background-color: #f9f9f999;
`
const HeroBg2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f9f9f999;
`
const HeroContentWrapper = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: 80% 20%;
  padding-top: 50px;
  margin-left: -125px;
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
    line-height: 3rem;
  }
`


const HeroSection = () => {

  return (
    <HeroContainer id='home'>
      <HeroBg>
      <HeroBg2>
      <HeroContentWrapper>
        <HeroContent>
          <HeroSlideshow />
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
      </HeroBg2>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;