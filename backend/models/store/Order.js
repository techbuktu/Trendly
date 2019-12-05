const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const OrderSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    product_list: {
        type: Array,
        default: []
    }

})

module.exports = Order = mongoose.model('Order', OrderSchema)

