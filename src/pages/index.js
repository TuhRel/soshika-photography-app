import * as React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import { GlobalStyle } from "../styles/GlobalStyle"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import PortfolioSection from "../components/PortfolioSection"

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
      </Layout>
    </>
  )
}

export default Home;
