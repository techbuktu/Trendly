const express = require("express")
const router = express.Router()


// Import/require the Profile model
const Profile = require('../../models/profile/Profile')

/**
 * @route GET api/profiles
 * @desc  Get a list of all Profile instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})

/**
 * @route GET api/profiles/:profileId
 * @desc  Get the matching Profile with _id of :profileId
 * @access Public 
 */
router.get('/:profileId', (req, res) => {
    res.send('Matching Profile with :profileId')

})

/**
 * @route POST api/profiles
 * @desc  Create a new Profile model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Profile instance')
})


/**
 * @route PUT api/profiles/:profileId
 * @desc  Update the matching Profile instance
 * @access Private
 */
router.put('/:profileId', (req, res) => {
    res.send('Update matching Profile')
})

/**
 * @route DELETE api/profiles/:profileId
 * @desc  Delete the matching Profile instance.
 * @access Private
 */


module.exports = router 