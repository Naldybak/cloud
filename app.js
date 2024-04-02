'use strict'

const express = require('express')

const PORT = 8000
const HOST = '35.193.57.94'

const app = express()
app.get('/', (req, res) => {
    res.send('Renaldy baktiar\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
