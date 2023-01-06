import React from 'react'
import styled from '@emotion/styled';
import servicesImage from '../images/backgroundImages/servicesBackground.jpg'

const ServicesContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${servicesImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: 50% 50%; */
`
const ServicesBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(3px);
    background-color: #f9f9f999;
`
const ServicesBg2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f9f9f999;
`
const ServicesContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: red;
  width: 95%;
  z-index: 1;
`
const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


const ServicesSection = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesBg>
        <ServicesBg2>
      <ServicesContentWrapper>
        <ServicesContent>
          <h3 style={{ color: '#17141f' }}>Services Section</h3>
        </ServicesContent>
        <ServicesContent>
          <h3 style={{ color: '#17141f' }}>Services Section</h3>
        </ServicesContent>
        <ServicesContent>
          <h3 style={{ color: '#17141f' }}>Services Section</h3>
        </ServicesContent>
      </ServicesContentWrapper>
      </ServicesBg2>
      </ServicesBg>
    </ServicesContainer>
  )
}

export default ServicesSection;