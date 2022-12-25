import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  position: fixed;
  top: 0;
  background-color: #f9f9f920;
  backdrop-filter: blur(5px);
`
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`
const NavLogo = styled(Link)`
  color: #17141f;
  text-decoration: none;
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
  /* font-size: 1.8rem;
  margin-top: -5px;
  color: #17141f;
  cursor: pointer; */
`
const NavMenu = styled.div`
  display: flex;
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
const NavScrollLink = styled(LinkS)`
  color: #17141f;
  padding: 15px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #17141f;
  }
`
const NavMenuBtn = styled.div`
  padding-left: 15px;
`
const NavBtnLink = styled(Link)`
  padding: 10px;
  border: 1px solid #17141f;
  border-radius: 10px;
  text-decoration: none;
  color: #17141f;

  &:hover{
    background-color: #17141f20;
  }
`

const Navbar = () => {
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
          <Burger>
            <FaBars />
          </Burger>
          <NavMenu>
            <NavMenuItem>
              <NavScrollLink to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>About</NavScrollLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavScrollLink to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>Services</NavScrollLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavScrollLink to='portfolio-preview'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>Portfolio</NavScrollLink>
            </NavMenuItem>
            <NavMenuBtn>
              <NavBtnLink to='/book-now'>Get a Quote</NavBtnLink>
            </NavMenuBtn>
          </NavMenu>
        </NavMenuContainer>
      </NavContainer>
    </Nav>
  )
}

export default Navbar;