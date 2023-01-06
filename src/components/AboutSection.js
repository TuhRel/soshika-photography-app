import React from 'react'
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import AboutData from '../dataFiles/aboutData';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 100%;
  /* padding-top: 80px; */
  /* justify-content: center; */
  /* align-items: center; */
  background-color: #f9f9f9;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* backdrop-filter: blur(3px); */
    /* background: linear-gradient(180deg, #f9f9f920 0%, #f9f9f960 100%), linear-gradient(180deg, #f9f9f920 0%, #f9f9f960 100%); */
    /* background: #f9f9f999; */
    overflow: hidden;
    z-index: 2;
    }
`
const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const AboutSectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 20px; */

  h2 {
    font-family: 'Bad Script', sans-serif;
  }
`
const AboutContentWrapper = styled.div`
  display: grid;
  width: 95%;
  height: 100%;
  grid-template-columns: 40% 60%;
  grid-column-gap: 10px black;
  align-self: center;
  align-items: center;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5rem;
    letter-spacing: 1px;
  }
`


const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <AboutSectionTitle>
        <h2>A little about me...</h2>
      </AboutSectionTitle>
      <AboutContentWrapper>
        {/* <AboutContent style={{alignItems: 'center', justifyContent: 'center'}}>

        </AboutContent> */}
        <AboutContent style={{alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
          <p style={{ color: '#17141f' }}>{AboutData}</p>
        </AboutContent>
        <AboutContent style={{alignItems: 'center', justifyContent: 'center'}}>
          <Box sx={{display: 'flex', alignSelf: 'center', justifyContent: 'center', width: '45%', height: '100%', paddingRight: '5px'}}>
              <img src={require('../images/aboutSectionImages/shika-johnson-photographer-2.jpg').default} alt='shika-johnson-photographer'
              style={{maxWidth: '100%', objectFit: 'cover'}}/>
          </Box>
          <Box sx={{display: 'flex', alignSelf: 'center', justifyContent: 'center', width: '45%', height: '100%', paddingLeft: '5px'}}>
            <img src={require('../images/aboutSectionImages/shika-johnson-photographer-1.jpg').default} alt='shika-johnson-photographer'
            style={{maxWidth: '100%', objectFit: 'cover'}}/>
          </Box>
        </AboutContent>
      </AboutContentWrapper>
    </AboutContainer>
  )
}

export default AboutSection;