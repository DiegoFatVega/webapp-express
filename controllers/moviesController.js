const connection = require('../database/connection') //attivazione collegamento al DataBase

function index(req, res) {
    const select_all_query = 'SELECT * FROM movies'

    connection.query(select_all_query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json(results);
    })
}

function show(req, res) {
    const movie_query = 'SELECT * FROM movies WHERE id = ?'
    const review_query = 'SELECT * FROM reviews WHERE movie_id = ?'

    const movie_id = Number(req.params.id);

    connection.query(movie_query, [movie_id], (err, results) => { //[] prepare statement per evitare le SQL injection
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(404).json({ message: 'movie not found' })
        }
        connection.query(review_query, [movie_id], (reviewsErr, reviewsResults) => {
            if (reviewsErr) return res.status(500).json({ error: reviewsErr.message });
            const thisMovie = { ...results[0], reviews: [reviewsResults] }
            res.json(thisMovie);
        });



    })

}

module.exports = {
    index,
    show
}