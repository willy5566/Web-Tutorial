const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000

// express template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
    res.render('index')
})

// strat and listen on the Express server
app.listen(port, () => {
    console.log(`http://localhost:${port} is running`)
})

// static files