import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { GlobalStyle } from '../styles/GlobalStyle';

const Layout = ({ children }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle />
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
        { children }
    <Footer />
    </>
  )
}

export default Layout;