import React from 'react'
import Layout from '../components/Layout';
import PortfolioLayout from '../components/portfolioPageComponents/PortfolioLayout';
import { portfolioObjFive, portfolioObjFour, portfolioObjOne, portfolioObjThree, portfolioObjTwo } from '../components/portfolioPageComponents/data';
import PortfolioLandingPage from '../components/portfolioPageComponents/PortfolioLandingPage';


const Portfolio = () => {
  return (
    <>
    <Layout>
      <PortfolioLandingPage />
    </Layout>
    </>
  )
}

export default Portfolio;