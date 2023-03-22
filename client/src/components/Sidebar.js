import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'gatsby'
import { FaTimes } from 'react-icons/fa'
import { GlobalStyle } from '../styles/GlobalStyle'

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #f9f9f990;
    backdrop-filter: blur(5px);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
    color: #17141f;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div`
    color: #17141f;
`

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`

const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #17141f;
    cursor: pointer;
    
    &:hover {
      border-bottom: 1px solid #17141f;
      transition: 0.2s ease-in-out;
    }
`

const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const SidebarRoute = styled(LinkR)`
    border-radius: 10px;
    border: 1px solid #17141f;
    white-space: nowrap;
    padding: 16px 64px;
    color: #17141f;
    font-size: 1.3rem;
    /* outline: none; */
    /* border: none; */
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #17141f20;
    }
`

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <GlobalStyle />
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                  <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                  <SidebarLink to="portfolio-preview" onClick={toggle}>Portfolio</SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to="/portfolio">Get a Quote</SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;