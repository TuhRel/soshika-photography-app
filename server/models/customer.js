const mongoose            = require('mongoose')

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: false
  },
  requestedService: {
    type: String,
    required: true
  },
  customerMessage: {
    type: String,
    required: true
  },
  lastAppointment: {
    type: Date,
    required: false,
    default: Date.now
  }
})

module.exports = mongoose.model("Customer", customerSchema)