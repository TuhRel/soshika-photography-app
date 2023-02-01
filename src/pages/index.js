import * as React from "react"
import AboutSection2 from "../components/AboutSection2"
import SubmenuBannerSection from "../components/SubmenuBannerSection"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import PortfolioBannerSection from "../components/PortfolioBannerSection"
import PortfolioSection from "../components/PortfolioSection2"

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <SubmenuBannerSection />
        <AboutSection2 />
        <PortfolioBannerSection />
        <PortfolioSection />
      </Layout>
    </>
  )
}

export default Home;
