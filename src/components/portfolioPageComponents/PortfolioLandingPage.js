import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@mui/material/Box'
import { GatsbyImage } from 'gatsby-plugin-image'

const PortfolioContainer = styled.div`
  display: flex;
  height: calc(100% - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`
const PortfolioWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 600px;
  /* height: 100%; */
  width: 90%;
  margin-top: 40px;
  padding: 50px;
  justify-content: center;
  align-items: center;
`
const ImageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
`  
const ImageText = styled.div`
  text-transform: uppercase;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
`

const PortfolioLandingPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "portfolioPageCoverImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 600, 
            placeholder: BLURRED)
        }
        name
      }
    }
  }
  `)

  return (
    <PortfolioContainer>
      <PortfolioWrapper>
      <PortfolioContent>
        {data?.allFile?.nodes?.map((image, index) => {
          return (
            <div>
            <ImageBox index={index}>
              <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='alt'/>
            </ImageBox>
            <ImageText>{image?.name} gallery</ImageText>
            </div>
          )
        })}
      </PortfolioContent>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default PortfolioLandingPage;