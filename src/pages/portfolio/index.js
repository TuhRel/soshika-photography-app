import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
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
  width: 90%;
  margin-top: 40px;
  padding: 50px;
  justify-content: center;
  align-items: center;
`
const ImageBox = styled(Link)`
  display: flex;
  flex-direction: column;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;

  &:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.2s;
  }
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


const Portfolio = ({ data }) => {

  console.log(data)
  const galleries = data?.allMarkdownRemark?.nodes

  return (
    <>
    <Layout>
      <PortfolioContainer>
        <PortfolioWrapper>
        <PortfolioContent>
          {galleries?.map((gallery) => {
            return (
              <div>
              <ImageBox key={gallery?.id} to={'/portfolio/' + gallery?.frontmatter?.slug}>
                <GatsbyImage image={gallery?.frontmatter?.thumb?.childImageSharp?.gatsbyImageData} alt='alt'/>
              </ImageBox>
              <ImageText>{gallery?.frontmatter?.title}</ImageText>
              </div>
            )
          })}
        </PortfolioContent>
        </PortfolioWrapper>
      </PortfolioContainer>
    </Layout>
    </>
  )
}

export default Portfolio;

export const portfolioPageData = graphql`
  query PortfolioPage {
    allMarkdownRemark(sort: {frontmatter: {order: ASC}}) {
      nodes {
        frontmatter {
          title
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(
                formats: AUTO, 
                height: 600, 
                placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`