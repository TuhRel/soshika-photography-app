const config            = require('./dbConfig')

const listDatabases = async (client) => {
  const dbList = await client.db().admin().listDatabases()
  console.log('Databases:')
  dbList.databases.forEach(db => {
    console.log(`- ${db.name}`)
  })
}

const collection = async () => {
  let data = await config.connect()
  const dbCollection = await data.databases().collection('customers').find()
  console.log('Customers:')
  dbCollection.forEach(doc => {
    console.log(`- ${doc.name}`)
  })
}

module.exports = {
  listDatabases,
  collection
}