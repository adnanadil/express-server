// If the files name is server.js is there is no need to add a start 
// command in package. json

const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('This is the base route of the server')
})

app.get('/messages', (req,res) => {
    res.send('Oh hello there Mr. Messages')
})

app.listen(3000, () => {
    console.log('Hello world !!!')
})