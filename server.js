const express = require('express')
const app = express()
const PORT = 3000

const moviesRouter = require('./routes/movies')
const globalMiddlewareRouter = require('./middlewares/globalMiddlewares')

app.listen(PORT, () => console.log(`server is listen on port http://localhost:${PORT}`))

app.get('/', (req, res) => {
    //testing internal server error middleware app.diego();
    res.send("Welcome to my Movies page")
})

app.use(express.static(`public`));

app.use("/api/movies", moviesRouter);

app.use(globalMiddlewareRouter.serverError);

app.use(globalMiddlewareRouter.notFound);



