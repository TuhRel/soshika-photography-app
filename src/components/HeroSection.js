import React from 'react'
import styled from '@emotion/styled';

const HeroContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
`
const HeroContent = styled.div``

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h3 style={{ color: '#17141f' }}>Hero Section</h3>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;