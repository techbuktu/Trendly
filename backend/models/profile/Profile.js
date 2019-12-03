const mongoose = require('mongoose')

const Schema = mongoose.Schema 
const slug_generator = require('mongoose-slug-generator')

const ProfileSchema = new Schema({
    user: {
        Map
    },
    about: {
        type: String,
        required: true
    },
})

module.exports = Profile = mongoose.model('Profile', ProfileSchema)