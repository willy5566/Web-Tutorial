const express = require('express')
const app = express()
const port=3000

app.get('/', (req, res) => {
    res.send(`This is my Web App created by Express started with nodemon.`)
})

app.get('/food', (req, res) => {
    res.send('My favorite food is ice cream.')
})

app.get('/popular/languages', (req, res) => {
    res.send('JavaScript is a popular language.')
})

// params
// :
app.get('/popular/languages/:language', (req, res) => {
    console.log('req.params.language',req.params.language)
    res.send(`${req.params.language} is a popular language.`)
})

app.listen(port, () =>{
    console.log(`Express is running on http://localhost:${port}`)
})