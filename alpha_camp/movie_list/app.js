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
    //console.log('movie_id', req.params)
    const movie = movieList.results.filter(item => item.id == req.params.movie_id)
    res.render('show', { movie: movie[0] })
})

app.get('/search', (req, res) => {
    const movies = movieList.results.filter(item => {
        return item.title.toLowerCase().includes(req.query.keyword.toLowerCase())
    })

    res.render('index', { movies: movies, keyword: req.query.keyword })
})

// strat and listen on the Express server
app.listen(port, () => {
    console.log(`http://localhost:${port} is running`)
})

// static files