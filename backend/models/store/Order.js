const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const OrderSchema = new Schema({
    cart: {
        type: Map,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = Order = mongoose.model('Order', OrderSchema)

