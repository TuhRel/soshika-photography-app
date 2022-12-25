import React from 'react'
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/GlobalStyle';
import PortfolioLayout from '../components/portfolioPageComponents/PortfolioLayout';
import { portfolioObjOne, portfolioObjTwo } from '../components/portfolioPageComponents/data';


const Portfolio = () => {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <PortfolioLayout {...portfolioObjOne}/>
      <PortfolioLayout {...portfolioObjTwo}/>
    </Layout>
    </>
  )
}

export default Portfolio;