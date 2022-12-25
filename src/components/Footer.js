import React from 'react'
import styled from '@emotion/styled';

const Foot = styled.footer`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`
const FooterContent = styled.div`
  font-size: 1rem;
  color: #17141f;
`

const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <FooterContent>
          Copyright 2022 SoShika Photography, LLC ©
        </FooterContent>
      </FooterContainer>
    </Foot>
  )
}

export default Footer;