// repuire related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars').engine
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ default: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// localhost:3000
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const options = req.body
    const password = generatePassword(req.body)
    res.render('index', { password: password, options: options })
})

app.listen(port, () => {
    console.log(`The Express server is running on http://localhost:${port}`)
})