const express = require('express')
const app = express()

let port = 3000

app.get('/', (req, res) => {
    res.send('Hello.')
})

app.get('/popular/languages/:language', (req, res) => {
    res.send(`${req.params.language} is a popular language.`)
})

app.listen(port, () =>{
    console.log(`http://localhost:${port} is running`)
})