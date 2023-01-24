import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PortfolioSlideshow from './portfolioSlideshow';
import { IoIosArrowRoundForward } from 'react-icons/io'

const PortfolioSectionContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  padding-top: 80px;
  /* height: calc(100vh - 80px); */
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`
const PortfolioSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  color: #17141f;
  max-width: fit-content;
  font-size: 3rem;

  &:hover {
    transition: all 0.2s ease-in-out;
  }

  p {
    font-size: 1.2rem;
  }
`


const AboutSection = () => {
  return (
    <PortfolioSectionContainer id='portfolio-preview'>
      <PortfolioSectionContent>
        <PortfolioSlideshow />
        <ButtonContainer>
          <Button to='/portfolio'>
            <p>view the</p>
            <p>Full Portfolio</p>
            <IoIosArrowRoundForward/>
          </Button>
        </ButtonContainer>
      </PortfolioSectionContent>
    </PortfolioSectionContainer>
  )
}

export default AboutSection;