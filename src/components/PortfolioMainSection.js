import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Box from '@mui/material/Box'
import { Link } from 'gatsby'

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
`
const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 95%;
  /* height: 100%; */
`
const PortfolioBox = styled(Box)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  cursor: pointer;
  width: 100%;
`
const ImageText = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: #00000090;
  text-decoration: none;

  &:hover {
    background-color: #00000020;
    transition: 0.3s ease-in-out;
  }

  h6 {
    font-size: 1rem;
    color: #fafafa;
  }
  p {
    font-size: 2rem;
    color: #fafafa;
  }
`

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "landingPageImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 700, 
            placeholder: BLURRED)
        }
        name
      }
    }
  }
  `)

  return (
    <PortfolioContainer>
      <PortfolioContent>
        {data?.allFile?.nodes?.map((image, index) => {
          return (
            <PortfolioBox index={index}>
              <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='alt'/>
                <ImageText to='/portfolio'>
                  <h6>view</h6>
                  <p>{image?.name}</p>
                  {/* {index === 0 ? <p>wedding</p> : index === 1 ? <p>portrait</p> : <p>graduation</p>} */}
                </ImageText>
            </PortfolioBox>
          )
        })}
      </PortfolioContent>
    </PortfolioContainer>
  )
}

export default PortfolioSection;