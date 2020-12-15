const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.port || 8080

// init with dummy data for now.
var allReservations = [
    {id:"id",
    name:"name",
    email: "email",
    phone: "1234567890"},
    {id:"Moop",
    name: "Some Name",
    email: "moop@gmail.com",
    phone: "9999999999"}
]

app.use(express.static('public'))
app.use(express.json())

app.get( '/', (req, res) => res.sendFile(path.join(__dirname, "./public/home.html")))
// get all the reservations IN JSON
app.get( '/api/reservations', function(req,res) {
    //res.end(JSON.stringify(allReservations))
    res.json(allReservations)
})
// add a new reservation
app.post('/api/reservations', function(req,res) {

})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

