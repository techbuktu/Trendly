const express = require("express")
const router = express.Router()

const Feed = require('../../models/feeds/Feed')

/**
 * @route GET api/feeds
 * @desc  Get a list of all Feed instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})


/**
 * @route GET api/feeds/for/:profileId
 * @desc  Get the matching Feed with _id of :feedId
 * @access Public 
 */
router.get('/:feedId', (req, res) => {
    res.send('Matching Feed with :feedId')

})

/**
 * @route GET api/feeds/:feedId
 * @desc  Get the matching Feed with _id of :feedId
 * @access Public 
 */
router.get('/:feedId', (req, res) => {
    res.send('Matching Feed with :feedId')

})

/**
 * @route POST api/feeds
 * @desc  Create a new Feed model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Feed instance')
})


/**
 * @route PUT api/feeds/:feedId
 * @desc  Update the matching Feed instance
 * @access Private
 */
router.put('/:feedId', (req, res) => {
    res.send('Update matching Feed')
})

/**
 * @route DELETE api/feeds/:feedId
 * @desc  Delete the matching Feed instance.
 * @access Private
 */
router.delete('/:feedId', (req, res) => {
    res.send('Delete the matching Feed')
})




module.exports = router 