import React from 'react'
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import AboutData from '../dataFiles/aboutData';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import aboutImage from '../images/backgroundImages/aboutBackground.jpg'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${aboutImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: 50% 50%; */
  /* background-color: #f9f9f9; */
`
const AboutBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background-color: #f9f9f999;
`
const AboutBg2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f9f9f999;
`
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: 100%;
  background-color: #f9f9f9;
  margin-top: 8%;
  margin-bottom: 8%;
`
const AboutSectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline 1px;
  padding: 20px 0;

  h2 {
    /* font-family: 'Bad Script', sans-serif; */
    font-weight: 200;
  }
`
const AboutContentWrapper = styled.div`
  display: grid;
  width: 95%;
  height: 100%;
  grid-template-columns: 40% 60%;
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
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "aboutSectionImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 450, 
            placeholder: BLURRED)
        }
      }
    }
  }
  `)

  return (
    <AboutContainer id='about'>
      <AboutBg>
      <AboutBg2>
      <AboutWrapper>
        <AboutContent>
          <AboutSectionTitle>
            <h2>A little about me...</h2>
          </AboutSectionTitle>
        </AboutContent>
      <AboutContentWrapper>
        <AboutContent style={{alignItems: 'center', justifyContent: 'center'}}>
          <p style={{ color: '#17141f' }}>{AboutData}</p>
        </AboutContent>
        <AboutContent style={{alignItems: 'center', justifyContent: 'center'}}>
          {data?.allFile?.nodes?.map((image, index) => {
            return (
              <Box sx={{display: 'flex', alignSelf: 'center', justifyContent: 'center', width: '45%', height: '100%', padding: '0 5px'}} key={index}>
                <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='alt'/>
              </Box>
            )
          })}
        </AboutContent>
      </AboutContentWrapper>
      </AboutWrapper>
      </AboutBg2>
      </AboutBg>
      <AboutBg id='business'>
      <AboutBg2>
      <AboutWrapper>
      <AboutSectionTitle>
        <h2>
          About SoShika Photography
        </h2>
      </AboutSectionTitle>
        <AboutContentWrapper style={{ gridTemplateColumns: '60% 40%'}}>
        <AboutContent style={{alignItems: 'center', justifyContent: 'center'}}>
          {data?.allFile?.nodes?.map((image, index) => {
            return (
              <Box sx={{display: 'flex', alignSelf: 'center', justifyContent: 'center', width: '45%', height: '100%', padding: '0 5px'}} key={index}>
                <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='alt'/>
              </Box>
            )
          })}
        </AboutContent>
        <AboutContent style={{alignItems: 'center', justifyContent: 'center'}}>
          <p style={{ color: '#17141f' }}>{AboutData}</p>
        </AboutContent>
      </AboutContentWrapper>
      </AboutWrapper>
      </AboutBg2>
      </AboutBg>
    </AboutContainer>
  )
}

export default AboutSection;