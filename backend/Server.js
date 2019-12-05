const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

//Default route for Trendly App
app.get('/', (req, res) => {
    res.send('Trendly eCommerce Platform')
})

app.get('/api', (req, res) => {
    res.send('<h3> Trendly API Docs</h3>')
})


//Import route modules for auth, 'profile' and 'store' APIs
//'Profile' API endpoints

app.use('/api/auth', require('./api/auth'))

app.use('/api/users', require('./api/profile/users'))

app.use('/api/profiles', require('./api/profile/profiles'))
app.use('/api/feeds', require('./api/profile/feeds'))

//app.use('/api/comments', require('./api/profile/comments'))
//app.use('/api/likes', require('./api/profile/likes'))

//Store API endpoints
app.use('/api/categories', require('./api/store/categories'))
app.use('/api/products', require('./api/store/products'))
app.use('/api/carts', require('./api/store/carts'))
app.use('/api/orders', require('./api/store/orders'))

// MongoDB configurations && integrations
const mongoDBUrl = "mongodb://127.0.0.1:27017/trendly"

mongoose.connect(mongoDBUrl,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
    )

const db = mongoose.connection 

db
.once('open', () => {
    console.log('Local MongoDB instance connected')
})
.on('error', err => {
    console.log(`MongoDB connection error: ${err}`)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})