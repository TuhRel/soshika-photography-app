import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  position: fixed;
  top: 0;
  background-color: #fafafa;
  backdrop-filter: blur(5px);
  z-index: 1100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
`
const NavLogo = styled(Link)`
  color: #17141f;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
`
const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 15px;
`
const Burger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #17141f;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavMenuItem = styled.div``
// const NavLink = styled(Link)`
//   color: #17141f;
//   padding: 15px;
//   text-decoration: none;

//   &:hover {
//     border-bottom: 1px solid #17141f;
//   }
// `
const NavScrollLink = styled(Link)`
  color: #17141f;
  padding: 15px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #17141f;
    transition: all ease-in-out;
  }
`
const NavMenuBtn = styled.div`
  padding-left: 15px;
`
const NavBtnLink = styled(Link)`
  padding: 10px;
  border: 1px solid #17141f;
  text-decoration: none;
  color: #17141f;
  transition: all 0.2s ease-in-out;

  &:hover{
    background-color: #17141f20;
    transition: all 0.2s ease-in-out;
  }
`

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/' onClick={toggleHome}>
          <div>SoShika Photography</div>
          {/* <div style={{ fontFamily: 'Bad Script', paddingLeft: '15px' }}>Photography</div> */}
        </NavLogo>
        <NavMenuContainer>
          <Burger onClick={toggle}>
            <FaBars />
          </Burger>
          <NavMenu>
            <NavMenuItem>
              <NavScrollLink to='/'>
                  Home
              </NavScrollLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavScrollLink to='/about'>
                  About
              </NavScrollLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavScrollLink to='/portfolio'>
                  Portfolio
              </NavScrollLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavScrollLink to='/details'>
                  Details
              </NavScrollLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavScrollLink to='/contact'>
                  Contact
              </NavScrollLink>
            </NavMenuItem>
            <NavMenuBtn>
              <NavBtnLink to='/book-now'>Ready to Book</NavBtnLink>
            </NavMenuBtn>
          </NavMenu>
        </NavMenuContainer>
      </NavContainer>
    </Nav>
  )
}

export default Navbar;