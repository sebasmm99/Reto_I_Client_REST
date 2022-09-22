const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRoute = require('./routes/user')

const mongoose = require('mongoose')
require('dotenv').config()

app.listen(port, () => console.log('Listening the port', port));

app.get('/', (req, res) => res.send('Bienvenido al Index'))

mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(() => console.log('Connected with MongoDB Atlas'))
    .catch((error) => console.log(error))

app.use(express.json())

app.use('/api', userRoute)







