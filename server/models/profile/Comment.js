const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const CommentSchema = new Schema({
    user: {
        type: Map,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now 
    },
    targetId: {
        type: Number
    }

})

module.exports = Comment = mongoose.model('Comment', CommentSchema)

