const express = require('express')
const path = require('path')
const app = express()

const linkRouter = require('./routes/linkRouter')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use(express.static('./public'))
app.use(express.urlencoded( { extended: true } ))

app.use('/', linkRouter)



module.exports = app