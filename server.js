const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => res.send('Test'))

app.listen(port, () => console.log(`Listening on ${port}.`))
