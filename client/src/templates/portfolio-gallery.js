import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Box from '@mui/material/Box'
import { HiOutlineArrowLongRight as ArrowRight } from 'react-icons/hi2'
import { HiOutlineArrowLongLeft as ArrowLeft } from 'react-icons/hi2'



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
const GalleryHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  padding: 40px 0;
  letter-spacing: 2px;
  justify-content: space-between;
`
const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const GalleryLink = styled(Link)`
  text-decoration: none;
`
const GalleryTitle = styled.div`
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 2px;
`
const GalleryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
`
const ImageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  max-height: 440px;
  max-width: 330px;
  object-fit: cover;
  overflow: hidden;
`

const PortfolioGallery = ({ data }) => {
  const title = data?.markdownRemark?.frontmatter?.title
  const current = data?.markdownRemark?.frontmatter?.order - 1
  const next = current === 5 ? 0 : current + 1
  const prev = current === 0 ? 5 : current - 1
  console.log('curr:', current, 'prev:', prev, 'next:', next)


  const nextGallery = data?.allMarkdownRemark?.nodes[next]?.frontmatter
  const prevGallery = data?.allMarkdownRemark?.nodes[prev]?.frontmatter


  return (
    <>
    <Layout>
    <GalleryContainer>
      <GalleryContentWrapper>
        <GalleryHeader>
          <HeaderItem>
            <ArrowLeft/>
            <GalleryLink to={'/portfolio/' + prevGallery?.slug}>{prevGallery?.title}</GalleryLink>
          </HeaderItem>
          <HeaderItem>
            <GalleryTitle>{title}</GalleryTitle>
          </HeaderItem>
          <HeaderItem>
            <GalleryLink to={'/portfolio/' + nextGallery?.slug}>{nextGallery?.title}</GalleryLink>
            <ArrowRight/>
          </HeaderItem>          
        </GalleryHeader>
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
        gatsbyImageData(formats: AUTO, height: 500, placeholder: BLURRED)
      }
      id
    }
  }
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      order
    }
  }
  allMarkdownRemark(sort: {frontmatter: {order: ASC}}) {
    nodes {
      frontmatter {
        slug
        title
        order
      }
    }
  }
}
`