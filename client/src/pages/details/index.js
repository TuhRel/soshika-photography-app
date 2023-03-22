import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import detailsImage from '../../images/backgroundImages/heroBackground.jpg'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`
const DetailsBg = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  background-image: url(${detailsImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 20%;
  box-shadow: inset 0 0 0 1000px #00000060;
`
const DetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  line-height: 2.2rem;
`
const DetailsTitle = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fafafa;
`
const DetailsSubtitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fafafa;
`
const DetailsContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* margin-top: 600px; */
  background-color: #fafafa;
`
const DetailsContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
  background-color: #17141f50;
  grid-gap: 1px;
  justify-content: center;
  align-items: center;
`
const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2.2rem;
  background-color: #fafafa;
  padding: 25px;
`
const ServiceTitle = styled.p`
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`
const ServiceSubtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 10px;
`
const ServiceText = styled.p`
  /* text-align: center; */
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 20px;
`
const DetailsPublish = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

const Details = ({ data }) => {
  const publisher = data?.allFile?.nodes

  return (
    <Layout>
      <DetailsContainer>
        <DetailsBg>
          <DetailsHeader>
            <DetailsTitle>
              Details
            </DetailsTitle>
            <DetailsSubtitle>
              Information & Pricing
            </DetailsSubtitle>
          </DetailsHeader>
        </DetailsBg>
        <DetailsContentWrapper>
          <DetailsContent>
            <ServiceCard>
              <ServiceTitle>
                Weddings
              </ServiceTitle>
              <ServiceSubtitle>
                Starting at $950
              </ServiceSubtitle>
              <ServiceText>
                Everyone loves airedale goat. Ricotta stinking bishop danish fontina red leicester macaroni cheese port-salut chalk and cheese rubber cheese. Airedale babybel lancashire cut the cheese ricotta fondue cheese slices red leicester.
              </ServiceText>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>
                Graduation
              </ServiceTitle>
              <ServiceSubtitle>
                Starting at $200
              </ServiceSubtitle>
              <ServiceText>
                Everyone loves airedale goat. Ricotta stinking bishop danish fontina red leicester macaroni cheese port-salut chalk and cheese rubber cheese. Airedale babybel lancashire cut the cheese ricotta fondue cheese slices red leicester.
              </ServiceText>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>
                Portrait
              </ServiceTitle>
              <ServiceSubtitle>
                Starting at $280
              </ServiceSubtitle>
              <ServiceText>
                Everyone loves airedale goat. Ricotta stinking bishop danish fontina red leicester macaroni cheese port-salut chalk and cheese rubber cheese. Airedale babybel lancashire cut the cheese ricotta fondue cheese slices red leicester.
              </ServiceText>
            </ServiceCard>
          </DetailsContent>
        </DetailsContentWrapper>
        <DetailsPublish>
            {publisher?.map(logo => {
              return (
                <div style={{backgroundColor: '#fafafa', maxHeight: '300px', maxWidth: '300px', objectFit: 'contain', padding: '20px'}}>
                  <GatsbyImage image={logo?.childImageSharp?.gatsbyImageData} alt='alt' />
                </div>
              )
            })}
          </DetailsPublish>
      </DetailsContainer>
    </Layout>
  )
}

export default Details;

export const detailsPageData = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "publishImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(formats: PNG, height: 100, placeholder: BLURRED)
        }
      }
    }
  }
`