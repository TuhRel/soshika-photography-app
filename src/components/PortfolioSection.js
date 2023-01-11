import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PortfolioSlideshow from './portfolioSlideshow';

const PortfolioSectionContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`
const PortfolioSectionContent = styled.div``
const Button = styled(Link)`
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #17141f;
  text-decoration: none;
  color: #17141f;

  &:hover {
    background-color: #17141f20;
    transition: all 0.2s ease-in-out;
  }
`


const AboutSection = () => {
  return (
    <PortfolioSectionContainer id='portfolio-preview'>
      <PortfolioSectionContent>
        <h3 style={{ color: '#17141f', padding: '5px', fontWeight: '400' }}>Portfolio Section</h3>
        <PortfolioSlideshow />
        <Button to='/portfolio'>Full Portfolio</Button>
      </PortfolioSectionContent>
    </PortfolioSectionContainer>
  )
}

export default AboutSection;