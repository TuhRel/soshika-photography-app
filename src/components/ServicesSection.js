import React from 'react'
import styled from '@emotion/styled';

const ServicesContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;

  :before {
    content: '';
    position: relative;
    backdrop-filter: blur(3px);
    /* background: linear-gradient(180deg, #f9f9f920 0%, #f9f9f960 100%), linear-gradient(180deg, #f9f9f920 0%, #f9f9f960 100%); */
    background: #f9f9f999;
    z-index: 2;
    }
`
const ServicesBg = styled.div`
    position: absolute;
    /* top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
    width: 100%;
    height: calc(100vh - 80px);
    overflow: hidden;
    z-index: -1;
`
const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transform: translateY(40px);
    background: #f9f9f9;
    overflow: hidden;
`
const ServicesOverlay = styled.div`
  position: absolute;
  height: calc(100vh - 80px);
  width: 100%;
  background-color: #f9f9f999;
`
const ServicesContentWrapper = styled.div`
  z-index: 1;
`
const ServicesContent = styled.div``


const ServicesSection = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesOverlay>
        <ServicesBg>
          <VideoBg src={require('../images/backgroundImages/servicesBackground.jpg').default} />
        </ServicesBg>
      </ServicesOverlay>
      <ServicesContentWrapper>
        <ServicesContent>
          <h3 style={{ color: '#17141f' }}>Services Section</h3>
        </ServicesContent>
      </ServicesContentWrapper>
    </ServicesContainer>
  )
}

export default ServicesSection;