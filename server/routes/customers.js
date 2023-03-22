const express           = require('express')
const config            = require('../dbFiles/dbConfig')
const dbOperation       = require('../dbFiles/dbOperation')
const router            = express.Router()
const Customer          = require('../models/customer')


// GETTING ALL
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find({})
    res.json(customers)
  }
  catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// GETTING ONE
router.get('/:id', getCustomer, (req, res) => {
  res.send(res.customer)
})

// CREATING ONE
router.post('/', async (req, res) => {
  await config.connect()
  const customer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    requestedService: req.body.requestedService,
    customerMessage: req.body.customerMessage,
    lastAppointment: req.body.lastAppointment
  })
  try {
    const newCustomer = await customer.save()
    res.status(201).json(newCustomer)
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// UPDATING ONE
router.patch('/:id', getCustomer, async (req, res) => {
  if (req.body.firstName != null) {
    res.customer.firstName = req.body.firstName
  }
  if (req.body.lastName != null) {
    res.customer.lastName = req.body.lastName
  }
  try {
    const updatedCustomer = await res.customer.save()
    res.json(updatedCustomer)
  }
  catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// DELETING ONE
router.delete('/:id', getCustomer, async (req, res) => {
  try {
    await res.customer.remove()
    res.json({ message: 'Customer deleted.'})
  }
  catch (err) {
    res.status(500).json({ message: err.message})
  }
})

async function getCustomer(req, res, next) {
  let customer

  try {
    customer = await Customer.findById(req.params.id)
    if (customer === null) {
      return res.status(404).json({ message: 'Customer not found' })
    }
  }
  catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.customer = customer
  next()
}


module.exports = router;