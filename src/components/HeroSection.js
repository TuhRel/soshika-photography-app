import React from 'react'
import styled from '@emotion/styled';
import HeroSlideshow from './HeroSlideshow';
import heroImage from '../images/backgroundImages/lincoln-memorial-engagement.jpg'

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
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
    background-color: #f9f9f970;
    /* box-shadow: inset 0 0 0 1000px #ffffff50; */
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
  padding-left: 20px;
  pointer-events: none;

  h1 {
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-weight: 300;
    padding-bottom: 5px;
    text-transform: uppercase;
  }
  h2 {
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  p {
    letter-spacing: 2px;
    padding-top: 50px;
    padding-bottom: 50px;
    font-weight: 300;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 200;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h4 {
    font-size: 1.8rem;
    font-weight: 200;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`


const HeroSection = () => {

  return (
    <HeroContainer id='home'>
      <HeroBg>
      <HeroContentWrapper>
        <HeroContent>
          <HeroSlideshow />
        </HeroContent>
        <HeroContent style={{paddingTop: '60px'}}>
          <HeroText>
            <h1>Est.</h1>
            <h2>2020</h2>
            <p>Orlando & <br/> Local Area <br/> Photographer</p>
            <h3>SoShika<br/>
            Photography</h3>
          </HeroText>
        </HeroContent>
      </HeroContentWrapper>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;