const express = require("express")
const router = express.Router()

const Comment = require('../../models/comment/Comment')


/**
 * @route GET api/comments
 * @desc  Get a list of all Comment instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})

/**
 * @route GET api/comments/:commentId
 * @desc  Get the matching Comment with _id of :commentId
 * @access Public 
 */
router.get('/:commentId', (req, res) => {
    res.send('Matching Comment with :commentId')

})

/**
 * @route POST api/comments
 * @desc  Create a new Comment model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Comment instance')
})


/**
 * @route PUT api/comments/:commentId
 * @desc  Update the matching Comment instance
 * @access Private
 */
router.put('/:commentId', (req, res) => {
    res.send('Update matching Comment')
})

/**
 * @route DELETE api/comments/:commentId
 * @desc  Delete the matching Comment instance.
 * @access Private
 */
router.delete('/:commentId', (req, res) => {
    res.send('Delete the matching Comment')
})




module.exports = router 