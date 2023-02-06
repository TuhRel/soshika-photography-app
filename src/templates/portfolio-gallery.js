import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Box from '@mui/material/Box'


const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
`
const GalleryContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const GalleryTitle = styled.div`
  font-size: 3rem;
  padding: 40px;
  font-weight: 100;
  letter-spacing: 2px;
`
const GalleryContent = styled.div`
  display: grid;
  /* width: 100%; */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
`
const ImageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  padding: 10px;
`

const PortfolioGallery = ({ data }) => {
  const title = data?.markdownRemark?.frontmatter?.title


  return (
    <>
    <Layout>
    <GalleryContainer>
      <GalleryContentWrapper>
        <GalleryTitle>{title}</GalleryTitle>
        <GalleryContent>
          {data?.allFile?.nodes?.map(image => {

            return (
              <>
              <ImageBox key={image?.childImageSharp?.id}>
                <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='alt'/>
              </ImageBox>
              </>
            )
          })}
        </GalleryContent>
      </GalleryContentWrapper>
    </GalleryContainer>
    </Layout>
    </>
  )
}

export default PortfolioGallery

export const gallery = graphql`
  query GalleryImages($galleryImages: String, $slug: String) {
    allFile(filter: {relativeDirectory: {eq: $galleryImages}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO, 
            height: 450, 
            placeholder: BLURRED)
        }
        id
      }
    }
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
    }
  }
`