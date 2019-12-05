const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const CartSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    product_list: {
        type: Array
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = Cart = mongoose.model('Cart', CartSchema)

