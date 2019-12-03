const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const FeedSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now 
    }

})

module.exports = Feed = mongoose.model('Feed', FeedSchema)

