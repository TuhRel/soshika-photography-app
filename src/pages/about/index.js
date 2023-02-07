import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@mui/material/Box'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`
const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`
const AboutTitle = styled.div`
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 40px;
  font-weight: 300;
`
const AboutSubtitle = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  padding-top: 10px;
  font-weight: 200;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: #556b2f90;
`
const AboutText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  font-weight: 100;
  letter-spacing: 2px;
`
const AboutImage = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  object-fit: cover;
  width: 100%;
  overflow: hidden;
`

const About = () => {
  const aboutImage = useStaticQuery(graphql`
  query {
    file(relativeDirectory: {eq: "aboutSectionImages"}) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO, 
          height: 750,
          layout: FIXED, 
          placeholder: BLURRED)
      }
    }
  }
  `)

  return (
    <Layout>
      <AboutContainer>
        <AboutContentWrapper>
          <AboutContent style={{padding: '40px', pointerEvents: 'none'}}>
            <AboutTitle>
              About
              <AboutSubtitle>
                Meet the photographer
              </AboutSubtitle>
            </AboutTitle>
            <AboutText>
              Bocconcini bavarian bergkase swiss. Macaroni cheese red leicester cheese on toast fondue emmental cut the cheese parmesan edam. Feta pepper jack pecorino cottage cheese swiss who moved my cheese roquefort cheese and biscuits. Cheesy grin mozzarella danish fontina rubber cheese camembert de normandie cauliflower cheese chalk and cheese cheese triangles. Taleggio paneer emmental blue castello jarlsberg cheesecake cheese strings parmesan. Fromage frais goat cheese slices the big cheese port-salut cheese triangles mozzarella taleggio. St. agur blue cheese cheesy grin fondue cream cheese taleggio squirty cheese.
            </AboutText>
          </AboutContent>
            <AboutContent>
              <AboutImage>
                <GatsbyImage 
                  style={{transform: 'translateY(-10%)'}} 
                  image={aboutImage?.file?.childImageSharp?.gatsbyImageData} 
                  alt='Shika Johnson, SoShika Photography'/>
              </AboutImage>
            </AboutContent>
        </AboutContentWrapper>
      </AboutContainer>
    </Layout>
  )
}

export default About;