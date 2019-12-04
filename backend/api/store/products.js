const express = require("express")
const router = express.Router()

const Product = require('../../models/store/Product')


/**
 * @route GET api/products
 * @desc  Get a list of all Product instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})

/**
 * @route GET api/products/:productId
 * @desc  Get the matching Product with _id of :productId
 * @access Public 
 */
router.get('/:productId', (req, res) => {
    res.send('Matching Product with :productId')

})

/**
 * @route POST api/products
 * @desc  Create a new Product model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Product instance')
})


/**
 * @route PUT api/products/:productId
 * @desc  Update the matching Product instance
 * @access Private
 */
router.put('/:productId', (req, res) => {
    res.send('Update matching Product')
})

/**
 * @route DELETE api/products/:productId
 * @desc  Delete the matching Product instance.
 * @access Private
 */
router.delete('/:productId', (req, res) => {
    res.send('Delete the matching Product')
})


module.exports = router 