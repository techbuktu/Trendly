const express = require("express")
const router = express.Router()

const Order = require('../../models/store/Order')


/**
 * @route GET api/orders
 * @desc  Get a list of all Order instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})

/**
 * @route GET api/orders/:orderId
 * @desc  Get the matching Order with _id of :orderId
 * @access Public 
 */
router.get('/:orderId', (req, res) => {
    res.send('Matching Order with :orderId')

})

/**
 * @route POST api/orders
 * @desc  Create a new Order model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Order instance')
})


/**
 * @route PUT api/orders/:orderId
 * @desc  Update the matching Order instance
 * @access Private
 */
router.put('/:orderId', (req, res) => {
    res.send('Update matching Order')
})

/**
 * @route DELETE api/orders/:orderId
 * @desc  Delete the matching Order instance.
 * @access Private
 */
router.delete('/:orderId', (req, res) => {
    res.send('Delete the matching Order')
})


module.exports = router 