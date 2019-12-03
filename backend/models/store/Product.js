const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Map
    },
    imageUrl: {
        type: String,
        required: false
    },
    addedDate: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = Product = mongoose.model('Product', ProductSchema)

