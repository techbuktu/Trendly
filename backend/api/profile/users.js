const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../../config/keys")

const User = require("../../models/profile/User")

/**
 * @route   GET api/users
 * @desc   Get list of all Users
 * @access Public
 */
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(
                {
                    successMsg: `${users.length} users were found.`,
                    user_list: users,
                }
                );
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `No users were found`
            })
        });
})

/**
 * @route   GET api/users
 * @desc   Get a matching User instance
 * @access Public
 */
router.get('/:userId', (req, res) => {
    User.findOne({ _id: req.params.userId })
        .then(user => {
            if(user){
                return res.status(200).json({user: user})
            }else {
                res.status(404).json({
                    errorMsg: `A User with this id (${req.params.userId} does not exist.)`
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                message: `User with id of ${req.params.userId} does not exist.`
            })
        })
})

/**
 * @route   POST api/users
 * #@desc   Create a new User instance
 * @acess   Public 
 */
router.post('/', (req, res) => {
    const {firstName, lastName, email, password } = req.body;

    //Check that all required fields are supplied
    if (!firstName || !lastName || !email || !password){
        return res.status(400).json({
            errorMessage: "Please, supply all the fields' values correctly."
        })
    }

    //If all fields were supplied, check if this could create a duplicate User object.
    User.findOne({ email: email})
        .then(duplicateUser => {
            
            if(duplicateUser){
                return res.status(400).json({
                    errorMessage: `User with this email ${email} already exists. Please, try with a different email or request a password change.`
                })
            } 

            const newUser = new User({
                firstName, lastName, email, password
            });

            //Create a salt and hash the supplied plain-text User.password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(new_user => {
                        if(!new_user){
                            return res.status(400).json({
                                errorMessage: `Error, a new user could not be created.`
                            })
                        }
                        //Sign the JWT token 
                        jwt.sign(
                            { id: new_user.id},
                            //config.get('jwtSecret'),
                            config.jwtSecret,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err){
                                    return res.status(400).json({
                                        errorMessage: `A token could not be generated for this user.`,
                                        tokenError: err 
                                    })
                                };
                                //If JWT signing is successful, return API response with new user and token data
                                res.json({
                                    successMessage: 'Congrats! :) You have sucessfully created a new user.',
                                    new_user: {
                                        id: new_user.id,
                                        firstName: new_user.firstName,
                                        lastName: new_user.lastName,
                                        email: new_user.email,
                                        auth_token: token
                                    }
                                })
                            }
                        )
                    })
                })
            })
        })
})

/**
 * @route   PUT api/users/:userId
 * @desc    Update an existing User instance.
 * @access  Private
 */
router.put('/:userId', (req, res) => {
    user = User.findOne({ _id: req.params.userId })
    if(user){
        const updatedFields = Object.keys(req.body);
        let userUpdate = {};

        updatedFields.map(field => {
            userUpdate[field] = req.body[field];
        })
        let query = { _id: req.params.userId };
        User.updateOne(query, userUpdate, (err) => {
            if(err){
                res.status(400).json({
                    errorMessage: `Sorry, user with id ${user._id} could not be updated`
                })
            }else{
                User.findById(req.params.userId)
                    .then(updatedUser => {
                        res.json({
                            successMessage: `You have successfully updated user with id: ${updatedUser._id}`,
                            updatedUser
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            errorMessage: `Sorry, user with id (${req.params.userId}) could not be updated.`
                        })
                    })
            }
        })
        
    }else {
        res.status(400).json({
            errorMessage: `Sorry, no user with id of ${req.params.userId} was found.`
        })
    }

})

/**
 * @route   DELETE api/users/:userId
 * @desc    Delete a single User instance
 * @access  Private
 */
router.delete('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            user.remove()
                .then(() => {
                    res.json({
                        successMessage: `You have removed user with id: ${req.params.userId}`
                    })
                })
            
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `User with id of ${req.params.userId} not found.`,
                fullErrorMessage: `${err}`
            })
        })
})

module.exports = router 