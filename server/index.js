const express = require('express')
const controller = require('./controllers/controller')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    login,
    register
} = require('./controllers/auth')


app.post(`/api/login`, controller.login);
app.post(`/api/register`, controller.register);

app.listen(4004, () => console.log(`running on 4004`))