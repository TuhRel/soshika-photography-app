import React from 'react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import aboutImage from '../images/backgroundImages/aboutBackground.jpg'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-image: url(${aboutImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
  background-color: #fafafa;
  /* padding-top: 80px; */
`
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  background-color: #dbc9ac;
`
const ImageBox = styled(Box)`
  display: flex;
  object-fit: cover;
  height: 100%;
`
const MenuBox = styled(Box)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 100px 40px;

  h1 {
    font-size: 1.4rem;
    font-weight: 300;
  }
  p {
    font-size: 1rem;
    font-weight: 100;
  }
`
const ArrowRight = styled(HiOutlineArrowLongRight)`
  font-size: 2rem;
  font-weight: 100;
  transform: scale(2.5, .5);
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const AboutSection2 = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "aboutSectionImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 2000, 
            placeholder: BLURRED)
        }
      }
    }
  }
  `)

  return (
    <AboutContainer id='about'>
      <AboutContent>
        <ImageBox>
          <GatsbyImage image={data?.allFile?.nodes[0]?.childImageSharp?.gatsbyImageData} alt='alt' />
        </ImageBox>
        <MenuBox>
          <TextBox>
            <h1>About Me</h1>
            <p>Get to know the photographer</p>
            <ArrowRight />
          </TextBox>
          <TextBox>
            <h1>Portfolio</h1>
            <p>View the galleries</p>
            <ArrowRight />
          </TextBox>
          <TextBox>
            <h1>Information</h1>
            <p>Processes and Pricing</p>
            <ArrowRight />
          </TextBox>
        </MenuBox>
        <ImageBox>
          <GatsbyImage image={data?.allFile?.nodes[1]?.childImageSharp?.gatsbyImageData} alt='alt' />
        </ImageBox>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection2;