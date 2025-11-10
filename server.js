const express = require('express')
const app = express()
const PORT = 3000

const connection = require('./database/connection') //attivazione collegamento al DataBase

app.listen(PORT, () => console.log(`server is listen on port http://localhost:${PORT}`))

