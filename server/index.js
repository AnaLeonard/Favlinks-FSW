//import express
const express = require('express')

//used to resolve the path to our client
const path = require('path')

//new express app in js
const app = express();

//setting new port to 3000
const PORT = 3000

//used to located the path 
const clientPath = path.resolve(__dirname, '../client/dist')

//located all the static files == dist
app.use(express.static(clientPath))

//creates new route for index.html?
app.get('/', (req, res) => {
    // we'll do some stuff here
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
    })

//starting server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    })