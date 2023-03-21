const express = require('express')
const app = express()
const engine = require('express-handlebars').engine
const movieList = require('./movies.json')
const port = 3000

// express template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
    res.render('index', { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
    console.log('movie_id', req.params)
    const movieOne = {
        title: 'Jurassic World: Fallen Kingdom',
        image: 'c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
        release_date: '2018-06-06',
        description: `
        Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the
        island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group,
        recruits Owen Grady to help prevent the extinction of the dinosaurs once again.`
    }
    res.render('show', { movie: movieOne })
})

// strat and listen on the Express server
app.listen(port, () => {
    console.log(`http://localhost:${port} is running`)
})

// static files