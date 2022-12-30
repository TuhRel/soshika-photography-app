import * as React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import PortfolioSection from "../components/PortfolioSection"

const Home = () => {
  return (
    <>
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
