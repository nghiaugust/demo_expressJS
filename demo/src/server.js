const express = require('express')
const morgan = require('morgan')
const app = express()
const dotenv = require("dotenv")
dotenv.config();
const port = process.env.PORT || 8000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    let a =1;
    let b =2;
    let c = a+b;
    res.send('Hello World!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})