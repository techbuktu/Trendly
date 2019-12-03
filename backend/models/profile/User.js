const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: true //Make true or leave arg, else: auth_token won't be show in /login route.
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});


module.exports = User = mongoose.model('User', UserSchema)

