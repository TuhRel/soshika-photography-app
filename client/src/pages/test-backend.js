import { Button, Input } from '@mui/material'
import * as React from 'react'

const TestBackend = () => {

  const [ backendData, setBackendData ] = React.useState([{}])
  const [ customer, setCustomer ] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestedService: '',
    customerMessage: '',
  })

  // const setInput = (e) => {
  //   const {name, value} = e.target;
  //   console.log(value);
  //   if (name === 'firstName') {
  //     setCustomer(prevState => ({
  //       ...prevState,
  //       [name]: value
  //     }));
  //     return;
  //   }
  //   setCustomer(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // }

  // const getCustomer = async () => {
  //   const newData = await fetch('/customers/', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: customer.firstName
  //     })
  //   })
  //   .then(res => res.json());
  //   console.log(newData);
  //   setBackendData(newData[0])
  // }

  React.useEffect(() => {
    fetch('/customers/')
    .then(
      response => response.json()
    )
    .then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const showCustomers = () => {
    backendData.map(data => {
      return (
        <>
        <p>data.firstName</p>
        <p>data.lastName</p>
        </>
      )
    })
  }

  console.log(backendData)

  return (
    <>
    {/* <Input name='firstName' placeholder='First Name' onChange={setInput}/> */}
    <Button onClick={() => showCustomers()}>Customers</Button>
    <showCustomers/>
    </>
  )
}

export default TestBackend;