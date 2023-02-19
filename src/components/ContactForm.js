import React, { useState } from 'react'
import styled from '@emotion/styled'
import Input from '@mui/joy/Input'
import FormControl from '@mui/joy/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/joy/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

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
  const [ service, setService ] = useState('')
  const handleChange = (event) => {
    setService(event.tartget.value)
  }

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
          placeholder='First Name' />
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          placeholder='Last Name' />
      </FormRow>
      <FormRow>
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          placeholder='Email Address' />
      </FormRow>
      <FormRow>
        <FormInput
          color='neutral'
          disabled={false}
          size='md'
          variant='outlined'
          placeholder='Phone Number' />
      </FormRow>
      <FormRow>
        {/* <FormControl sx={{width: '100%'}}> */}
          {/* <InputLabel>Service</InputLabel> */}
          <Select
            sx={{width: '100%', margin: '10px'}}
            value={service}
            label='service'
            onChange={handleChange}>
              <MenuItem value={'Wedding'}>Wedding</MenuItem>
              <MenuItem value={'Family'}>Family</MenuItem>
              <MenuItem value={'Portrait'}>Portrait</MenuItem>
              <MenuItem value={'Maternity'}>Maternity</MenuItem>
          </Select>
        {/* </FormControl> */}
      </FormRow>
      <FormRow>
        <FormDetailsText
          disabled={false}
          variant='outlined'
          placeholder='Type your message here...'
          multiline
          rows={5} />
      </FormRow>
      <FormRow>
        <Button>Submit</Button>
      </FormRow>
    </FormContainer>
  )
}

export default ContactUs;