import * as React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import { GlobalStyle } from "../styles/GlobalStyle"
import AboutSection from "../components/About"
import ServicesSection from "../components/Services"
import PortfolioSection from "../components/PortfolioSection"

export default function Home() {
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
