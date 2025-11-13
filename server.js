const express = require('express')
const app = express()
const PORT = 3000


const moviesRouter = require('./routes/movies')

app.listen(PORT, () => console.log(`server is listen on port http://localhost:${PORT}`))

app.get('/', (req, res) => {
    res.send("Welcome to my Movies page")
})

app.use(express.static(`public`));

app.use("/api/movies", moviesRouter);







