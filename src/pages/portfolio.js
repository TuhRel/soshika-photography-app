import React from 'react'
import Layout from '../components/Layout';
import PortfolioLayout from '../components/portfolioPageComponents/PortfolioLayout';
import { portfolioObjFive, portfolioObjFour, portfolioObjOne, portfolioObjThree, portfolioObjTwo } from '../components/portfolioPageComponents/data';


const Portfolio = () => {
  return (
    <>
    <Layout>
      <PortfolioLayout {...portfolioObjOne}/>
      <PortfolioLayout {...portfolioObjFour}/>
      <PortfolioLayout {...portfolioObjTwo}/>
      <PortfolioLayout {...portfolioObjThree}/>
      <PortfolioLayout {...portfolioObjFive}/>
    </Layout>
    </>
  )
}

export default Portfolio;