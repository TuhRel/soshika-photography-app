import React from 'react'
import styled from '@emotion/styled';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

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
  flex-direction: column;
  align-items: center;
`
const FooterContent = styled.div`
  font-size: 1rem;
  color: #17141f;
`
const IconLinks = styled.a`
  padding: 10px;
`
const Instagram = styled(FaInstagram)`
  color: #17141f;
`
const Facebook = styled(FaFacebook)`
  color: #17141f;
`

const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <FooterContent>
            <IconLinks 
              href='https://www.instagram.com/soshikaphotography/' 
              target='_blank' 
              rel='noopener noreferrer'>
                <Instagram/>
            </IconLinks>
            <IconLinks 
              href='https://m.facebook.com/soshikaphotography0/?ref=py_c'
              target='_blank'
              rel='noopener noreferrer'>
                <Facebook/>
            </IconLinks>
        </FooterContent>
        <FooterContent>
          Copyright 2022 SoShika Photography, LLC ©
        </FooterContent>
      </FooterContainer>
    </Foot>
  )
}

export default Footer;