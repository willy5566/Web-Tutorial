const express = require('express')
const app = express()
const engine = require('express-handlebars').engine
const port = 3000

// express template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
    res.render('index')
})

// strat and listen on the Express server
app.listen(port, () => {
    console.log(`http://localhost:${port} is running`)
})

// static files