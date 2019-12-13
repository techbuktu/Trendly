const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const LikeSchema = new Schema({
    user: {
        type: Map,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    }

})

module.exports = Like = mongoose.model('Like', LikeSchema)