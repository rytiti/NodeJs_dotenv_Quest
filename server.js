const app = require('express')()

require('dotenv').config()


app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on port ${process.env.SERVER_PORT}`)
  console.log(`I am ${process.env.NAME}, wilder in ${process.env.CITY} and i love ${process.env.LANGUAGE}`)
})