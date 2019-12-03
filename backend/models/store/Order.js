const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const OrderSchema = new Schema({
    user: {
        type: Map,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    product_list: {
        type: Array
    }

})

module.exports = Order = mongoose.model('Order', OrderSchema)

