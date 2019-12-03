const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const CartSchema = new Schema({
    owner: {
        type: Map,
        required: true
    },
    product_list: {
        type: Array
    }
})

module.exports = Cart = mongoose.model('Cart', CartSchema)

