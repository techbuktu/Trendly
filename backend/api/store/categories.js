const express = require("express")
const router = express.Router()

const Category = require('../../models/store/Category')


/**
 * @route GET api/categories
 * @desc  Get a list of all Category instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    res.send('Success')
})

/**
 * @route GET api/categrories/:categoryId
 * @desc  Get the matching Category with _id of :categoryId
 * @access Public 
 */
router.get('/:categoryId', (req, res) => {
    res.send('Matching Category with :categoryId')

})

/**
 * @route POST api/categories
 * @desc  Create a new Category model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    res.send('Create a new Category instance')
})


/**
 * @route PUT api/categories/:categoryId
 * @desc  Update the matching Category instance
 * @access Private
 */
router.put('/:categoryId', (req, res) => {
    res.send('Update matching Category')
})

/**
 * @route DELETE api/categories/:categoryId
 * @desc  Delete the matching Category instance.
 * @access Private
 */
router.delete('/:categoryId', (req, res) => {
    res.send('Delete the matching Category')
})
