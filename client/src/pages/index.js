import * as React from "react"
import SubmenuBannerSection from "../components/SubmenuBannerSection"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import PortfolioBannerSection from "../components/PortfolioBannerSection"
import PortfolioSection from "../components/PortfolioMainSection"
import SubmenuSection from "../components/SubmenuMainSection"

const Home = () => {

  return (
    <>
      <Layout>
        <HeroSection />
        <SubmenuBannerSection />
        <SubmenuSection />
        <PortfolioBannerSection />
        <PortfolioSection />
      </Layout>
    </>
  )
}

export default Home;
