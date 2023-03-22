require('dotenv').config()
const { MongoClient, ServerApiVersion }       = require('mongodb');
const DATABASE                                = process.env.DATABASE_URL || 5000

const client = new MongoClient(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

const connect = async () => {
  try {
    await client.connect()
    console.log('connected to database')
  }
  catch(e) {
    console.log(e)
  }
}

const close = async () => {
  try {
    await client.close()
    console.log('closed the database')
  }
  catch(e) {
    console.log(e)
  }
}

module.exports = {
  connect,
  close
}