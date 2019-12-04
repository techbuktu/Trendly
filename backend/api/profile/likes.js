const express = require("express")
const router = express.Router()

const Like = require('../../models/like/Like')


/**
 * @route GET api/likes
 * @desc  Get a list of all Like instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})

/**
 * @route GET api/likes/:likeId
 * @desc  Get the matching Like with _id of :likeId
 * @access Public 
 */
router.get('/:likeId', (req, res) => {
    res.send('Matching Like with :likeId')

})

/**
 * @route POST api/likes
 * @desc  Create a new Like model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Like instance')
})


/**
 * @route PUT api/likes/:likeId
 * @desc  Update the matching Like instance
 * @access Private
 */
router.put('/:likeId', (req, res) => {
    res.send('Update matching Like')
})

/**
 * @route DELETE api/likes/:likeId
 * @desc  Delete the matching Like instance.
 * @access Private
 */
router.delete('/:likeId', (req, res) => {
    res.send('Delete the matching Like')
})



module.exports = router 