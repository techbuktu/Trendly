const express = require("express")
const router = express.Router()

const Cart = require('../../models/store/Cart')


/**
 * @route GET api/carts
 * @desc  Get a list of all Cart instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})

/**
 * @route GET api/carts/:cartId
 * @desc  Get the matching Cart with _id of :cartId
 * @access Public 
 */
router.get('/:cartId', (req, res) => {
    res.send('Matching Cart with :cartId')

})

/**
 * @route POST api/carts
 * @desc  Create a new Cart model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Cart instance')
})


/**
 * @route PUT api/carts/:cartId
 * @desc  Update the matching Cart instance
 * @access Private
 */
router.put('/:cartId', (req, res) => {
    res.send('Update matching Cart')
})

/**
 * @route DELETE api/carts/:cartId
 * @desc  Delete the matching Cart instance.
 * @access Private
 */
router.delete('/:cartId', (req, res) => {
    res.send('Delete the matching Cart')
})
