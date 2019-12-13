const mongoose = require('mongoose')

const Schema = mongoose.Schema 
const slug_generator = require('mongoose-slug-generator')

const ProfileSchema = new Schema({
    user: {
        type: Map,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    }
})

module.exports = Profile = mongoose.model('Profile', ProfileSchema)