const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config/keys');

const User = require('../models/profile/User')

/**
 * @route   GET api/auth/login
 * @desc    User authenticates using email and password and gets sent back a JWT
 * @access  Public 
 */
router.post('/login', (req, res) => {
    //Get user's email and password values sent from (web or mobile) client
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            errorMsg: `Please, supply both 'email' and 'password' fields to login`
        })
    }
    
    User.findOne({email})
        .then(authUser => {
            if(!authUser){
                return res.status(400).json({
                    errorMsg: `A matching User with this email does not exist.`
                })
            }
            
            //Compare the client-supplied req.body.password with the hashed authUser.password in the DB
            bcrypt.compare(password, authUser.password)
                .then(isMatch => {

                    //If client-supplied does not match, return a helpful errorMsg
                    //If password matches, sign and return user{username, id} and 'auth_token' to client
                    //Sign the JWT token
                    if(!isMatch){
                        return res.status(400).json({
                            errorMsg: `Password does not match. Please, check and try again.`
                        })
                    }
                        jwt.sign(
                            { id: authUser.id},
                            //config.get('jwtSecret'),
                            config.jwtSecret,
                            { expiresIn: 3600 * 24 * 30 },
                            (err, token) => {
                                if(err){
                                    return res.status(400).json({
                                        errorMsg: `A token could not be generated for this user.`,
                                        tokenError: err 
                                    })
                                };
                                //If JWT signing is successful, return API response with new user and token data
                                res.json({
                                    successMsg: 'Congrats! :) You have sucessfully logged in.',
                                    auth_token: token,
                                    user: {
                                        id: authUser.id,
                                        firstName: authUser.firstName,
                                        lastName: authUser.lastName,
                                        email: authUser.email
                                    }
                                })
                            }
                        )
                })
                .catch(err => {
                    res.status(400).json({
                        errorMsg: err
                    })
                })
                
        })
})

module.exports = router 