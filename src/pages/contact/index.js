import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import ContactUs from '../../components/ContactForm'
import contactImage from '../../images/backgroundImages/contact-form-image.jpg'
import { StaticImage } from 'gatsby-plugin-image'


const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* padding: 40px; */
  background-color: #fafafa;
`
const ContactForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  height: calc(100vh - 80px);
  width: 100%;
  margin-top: 80px;
`
const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* padding: 40px; */
  object-fit: cover;
  overflow: hidden;
`

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <ContactForm>
          <FormColumn>
            <StaticImage src='../../images/backgroundImages/contact-form-img.jpg' alt='alt' />
          </FormColumn>
          <FormColumn>
            <ContactUs />
          </FormColumn>
        </ContactForm>
      </ContactContainer>
    </Layout>
  )
}

export default Contact;