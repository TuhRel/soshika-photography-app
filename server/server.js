// Imports
require('dotenv').config()
const express         = require('express')
const mongoose        = require('mongoose')
const cors            = require('cors')
const path            = require('path')

// Database URL
const DATABASE        = process.env.DATABASE_URL

// Setup App
const app             = express()

// Connect to Database
mongoose.set('strictQuery', false)
mongoose.connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Data Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes
const customersRouter = require('./routes/customers')
app.use('/customers', customersRouter)

// Log traffic
app.listen(5000, () => {
  console.log(`Server started on port 5000`)
})