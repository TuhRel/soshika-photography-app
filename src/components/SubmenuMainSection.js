import React from 'react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import aboutImage from '../images/backgroundImages/aboutBackground.jpg'

const SubmenuMainContainer = styled.div`
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
const SubmenuMainContent = styled.div`
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
const TextBox = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #17141f;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: ease-in-out .2s;
  }
`
const SubmenuSection = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "submenuSectionImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 2000, 
            placeholder: BLURRED)
        }
        name
      }
    }
  }
  `)

  return (
    <SubmenuMainContainer id='about'>
      <SubmenuMainContent>
        <ImageBox>
          <GatsbyImage image={data?.allFile?.nodes[0]?.childImageSharp?.gatsbyImageData} alt={data?.allFile?.nodes[0]?.name} />
        </ImageBox>
        <MenuBox>
          <TextBox to='/about'>
            <h1>About Me</h1>
            <p>Get to know the photographer</p>
            <ArrowRight />
          </TextBox>
          <TextBox to='/portfolio'>
            <h1>Portfolio</h1>
            <p>View the galleries</p>
            <ArrowRight />
          </TextBox>
          <TextBox to='/'>
            <h1>Information</h1>
            <p>Processes and Pricing</p>
            <ArrowRight />
          </TextBox>
        </MenuBox>
        <ImageBox>
          <GatsbyImage image={data?.allFile?.nodes[1]?.childImageSharp?.gatsbyImageData} alt={data?.allFile?.nodes[1]?.name} />
        </ImageBox>
      </SubmenuMainContent>
    </SubmenuMainContainer>
  )
}

export default SubmenuSection;