import React from 'react'
import styled from '@emotion/styled';

const ServicesContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`
const ServicesContent = styled.div``


const ServicesSection = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesContent>
        <h3 style={{ color: '#17141f' }}>Services Section</h3>
      </ServicesContent>
    </ServicesContainer>
  )
}

export default ServicesSection;