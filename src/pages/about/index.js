import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`
const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  justify-content: center;
  align-items: center;
`
const AboutContent = styled.div``

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <AboutContentWrapper>
          <AboutContent>
            About Page
          </AboutContent>
          <AboutContent>
            About Page
          </AboutContent>
        </AboutContentWrapper>
      </AboutContainer>
    </Layout>
  )
}

export default About;