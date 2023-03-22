import React, { useState } from 'react'
import styled from '@emotion/styled'
import Input from '@mui/joy/Input'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Alert, createTheme } from '@mui/material'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: #ececec;  */
`
const FormHeader = styled.p`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  padding: 20px;
`
const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const FormInput = styled(Input)`
  width: 100%;
  margin: 10px;
`
const FormDetailsText = styled(TextField)`
  width: 100%;
  margin: 10px;
`


const ContactUs = () => {
  const [ backendData, setBackendData ] = useState([{}])
  const [ customer, setCustomer ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestedService: '',
    customerMessage: '',
  })

  const setInput = (e) => {
    const {name, value} = e.target;
    // console.log(value);
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const createCustomer = async () => {
    const newData = await fetch('/customers/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...customer
      })
    })
  }

  const reloadPage = () => {
    window.location.reload()
  }


  // React.useEffect(() => {
  //   fetch('/customers/')
  //   .then(
  //     response => response.json()
  //   )
  //   .then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  

  return (
    <FormContainer>
      <FormHeader>
        Let's Connect
      </FormHeader>
      <FormRow>
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          name='firstName'
          onChange={setInput}
          placeholder='First Name' />
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          name='lastName'
          onChange={setInput}
          placeholder='Last Name' />
      </FormRow>
      <FormRow>
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          name='email'
          placeholder='Email Address' 
          onChange={setInput} />
      </FormRow>
      <FormRow>
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          name='phone'
          placeholder='Phone Number'
          onChange={setInput} />
      </FormRow>
      <FormRow>
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          name='requestedService'
          placeholder='Service (i.e Wedding, Birthday, Maternity, etc...)'
          onChange={setInput} />
      </FormRow>
      <FormRow>
        <FormDetailsText
          disabled={false}
          inputProps={{sx: {fontFamily: 'initial'}}}
          variant='outlined'
          name='customerMessage'
          placeholder='Provide any details you may have...'
          onChange={setInput}
          multiline
          minRows={5} />
      </FormRow>
      <FormRow>
        <Button
          variant='outlined'
          color='inherit'
          onClick={() => {
            createCustomer();
            reloadPage()
          }}>
            Submit</Button>
      </FormRow>
    </FormContainer>
  )
}

export default ContactUs;