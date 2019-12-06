const express = require("express")
const router = express.Router()

const Category = require('../../models/store/Category')

/**
 * @route GET api/categories
 * @desc  Get a list of all Category instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    Category.find({})
        .then(categories => {
            if(categories.length > 0){
                res.json({
                    successMsg: `${categories.length} categories were found.`,
                    category_list: categories
                })
            }else {
                res.status(404).json({
                    errorMsg: `Sorry, no Categories have been created yet.`
                })
            }
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `Sorry, no Categories were found.`,
                error: err
            })
        })
})

/**
 * @route GET api/categrories/:categoryId
 * @desc  Get the matching Category with _id of :categoryId
 * @access Public 
 */
router.get('/:categoryId', (req, res) => {
    Category.findOne({_id: req.params.categoryId})
        .then(category => {
            if(category){
                res.json({
                    category
                })
            }else {
                res.status(404).json({
                    errorMsg: `Sorry, this Category does not exist.`
                })
            }
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `This Category (id: ${req.params.categoryId}) was not found.`,
                error: err
            })
        })

})

/**
 * @route POST api/categories
 * @desc  Create a new Category model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    const { name, description } = req.body 

    if(!name || !description){
        return res.status(400).json({
            errorMsg: `Please, send all required fields.`
        })
    }

    //Make sure this is not a duplicate category 
    Category.findOne({ name: name })
        .then(duplicateCategory => {
            if(duplicateCategory){
                res.status(400).json({
                    errorMsg: `This Category (id: ${req.params.categoryId}) already exists.`
                })
            }else {
                const newCategory = new Category({
                    name: name, description: description
                })

                newCategory.save()
                    .then(new_category => {
                        if(new_category){
                            return res.json({
                                new_category
                            })
                        }
                    })
                    .catch(err => {
                        res.status(400).json({
                            errorMsg: `A new category could not be created.`,
                            error: err
                        })
                    })
            }
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
    

})


/**
 * @route PUT api/categories/:categoryId
 * @desc  Update the matching Category instance
 * @access Private
 */
router.put('/:categoryId', (req, res) => {
    
    //Get the updated Category fields sent by client
    const updatedFields = Object.keys(req.body)

    if(updatedFields.length> 0){
        //Verify that category exists
        Category.findOne({ _id: req.params.categoryId})
        .then(category => {
                //Create an update object to sent to the DB
                let categoryUpdate = {}
                updatedFields.map(field => {
                    categoryUpdate[field] = req.body[field]
                })

                //Create a query obj to query against the 'categories' collection in the DB
                let query = {_id: req.params.categoryId}

                //Update the Category in the DB and send response back to client
                Category.updateOne(query, categoryUpdate)
                    .then(updateSuccess => {
                        if(updateSuccess){
                            Category.findById(req.params.categoryId)
                                .then(updatedCategory => {
                                    if(updatedCategory){
                                        res.json({
                                            successMsg: `Category (id: ${req.params.categoryId}) has been updated.`,
                                            udated_category: updatedCategory
                                        })
                                    }else {
                                        res.status(500).json({
                                            errorMsg: `This Category (id: ${req.params.categoryId}) could not be updated.`,
                                            error: updateError
                                        })
                                    }
                                })
                        }
                    })

            })
            .catch(err => {
                res.status(404).json({
                    errorMsg: `Sorry, this category does not exist.`,
                    error: err
                })
            })
    }else {
        res.status(400).json({
            errorMsg: `Please, the k-v pairs to update this Category with.`
        })
    }
})

/**
 * @route DELETE api/categories/:categoryId
 * @desc  Delete the matching Category instance.
 * @access Private
 */
router.delete('/:categoryId', (req, res) => {
    Category.findOne({ _id: req.params.categoryId})
        .then(category => {
            category.remove()
                .then(() => {
                    res.json({
                        successMsg: `You have successfully-deleted this Category (id: ${req.params.categoryId})`
                    })
                })
                .catch(err => {
                    res.status(403).json({
                        errorMsg: `This Category (id: ${req.params.categoryId}) could not be deleted. Make sure you have the right permissions.`,
                        error: err
                    })
                })
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `Sorry, this Category (id: ${req.params.categoryId}) could not be found. Please, check and try again.`,
                error: err
            })
        })
})


module.exports = router