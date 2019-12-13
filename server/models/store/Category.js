const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }

})

module.exports = Category = mongoose.model('Category', CategorySchema)

