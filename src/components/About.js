import React from 'react'
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
`
const AboutContent = styled.div``


const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <AboutContent>
        <h3 style={{ color: '#17141f' }}>About Section</h3>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection;