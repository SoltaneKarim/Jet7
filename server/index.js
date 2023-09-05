const express = require("express")
const app = express()
const port = 5000
const db = require("./database/index.js")
const bodyparser = require("body-parser")
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => () => {
    console.log("hello from the server");
})

// crud for table user
app.get('/user', db.getAllUsers)
app.post('/user', db.addUser)
app.put('/user/:id', db.updateUser)
app.delete('/user/:id', db.deleteUser)

// crud for table hotel
app.get('/hotel', db.getAllHotels)
app.post('/hotel', db.addHotel)
app.put('/hotel/:id', db.updateHotel)
app.delete('/hotel/:id', db.deleteHotel)

// crud for table shop
app.get('/product', db.getAllProducts)
app.post('/product', db.addProduct)
app.put('/product/:id', db.updateProduct)
app.delete('/product/:id', db.deleteProduct)

// crud for table nightlife
app.get('/nightlife', db.getAllNightLifes)
app.post('/nightlife', db.addNightLife)
app.put('/nightlife/:id', db.updateNightLife)
app.delete('/nightlife/:id', db.deleteNightLife)

// crud for table museums
app.get('/museum', db.getAllMuseums)
app.post('/museum', db.addMuseum)
app.put('/museum/:id', db.updateMuseum)
app.delete('/museum/:id', db.deleteMuseum)


// crud for table museums
app.get('/city', db.getAllCitys)
app.post('/city', db.addCity)
app.put('/city/:id', db.updateCity)
app.delete('/city/:id', db.deleteCity)


app.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
})
