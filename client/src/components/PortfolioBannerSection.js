import React from 'react'
import styled from '@emotion/styled'

const PortfolioBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  pointer-events: none;
`
const BannerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: center;
  line-height: 2rem;

  h2 {
    font-size: 1.3rem;
    font-weight: 300;
    padding: 10px;
    text-transform: uppercase;
  }
`

const PortfolioBannerSection = () => {
  return (
    <PortfolioBannerContainer>
      <BannerHeader>
        <h2>Browse the Portfolio</h2>
      </BannerHeader>
    </PortfolioBannerContainer>
  )
}

export default PortfolioBannerSection;