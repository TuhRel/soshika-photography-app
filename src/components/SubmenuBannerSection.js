import React from 'react'
import styled from '@emotion/styled'

const SubmenuBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`
const BannerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  padding: 80px 50px;
  max-width: 700px;
  text-align: center;
  line-height: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
    padding: 10px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    font-weight: 100;
    padding: 10px;
  }
`

const SubmenuBannerSection = () => {
  return (
    <SubmenuBannerContainer>
      <BannerHeader>
        <h2>Welcome to SoShika Photography</h2>
        <p>A place where all of your dreams can come true. Let's work together and allow me to bring all of your fantasies to reality through photos!</p>
      </BannerHeader>
    </SubmenuBannerContainer>
  )
}

export default SubmenuBannerSection;