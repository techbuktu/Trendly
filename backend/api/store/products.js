const express = require("express")
const router = express.Router()

const Product = require('../../models/store/Product')
const Category = require('../../models/store/Category')


/**
 * @route GET api/products
 * @desc  Get a list of all Product instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    Product.find()
        .then(products => {
            res.json({
                successMsg: `${products.length} Products were found.`,
                product_list: products
            })
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `Sorry, no Products were found.`,
                error: err
            })
        })
})

/**
 * @route GET api/products/:productId
 * @desc  Get the matching Product with _id of :productId
 * @access Public 
 */
router.get('/:productId', (req, res) => {
    Product.findOne({ _id: req.params.productId})
        .then(product => {
            res.json({
                product: product
            })
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `A Product with this id does not exist.`,
                error: err
            })
        })

})

/**
 * @route POST api/products
 * @desc  Create a new Product model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    //Get the key-value items from the req.body object
    const {name, category, imageUrl, price} = req.body 

    //Verify that all required fields were sent by client.
    if(!name || !category || !imageUrl || !price){
        return res.status(400).json({
            errorMsg: `Please, supply all required for the new Product.`
        })
    }

    // Verify that a duplicate Product does not already exist
    Product.findOne({ name: name, category: category})
        .then(duplicateProduct => {
            if(duplicateProduct){
                res.status(400).json({
                    errorMsg: `Sorry, this Product with id(${duplicateProduct._id}) already exists`
                })
            }else {
                // Create a new Product instance using date supplied by the client
                const newProduct = new Product({
                    name, category, imageUrl, price
                })

                newProduct.save()
                    .then(new_product => {
                        res.json({
                            successMsg: `A new Product (id: ${new_product._id}) was created.`,
                            new_product: new_product
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            errorMsg: `Something went wrong. Please, check the 'error' obj and the data you sent.`,
                            error: err
                        })
                    })
            }
        })
        .catch(err => {
            res.status(400).json({
                errorMsg:  `Something went wrong.`,
                error: err
            })
        })


})


/**
 * @route PUT api/products/:productId
 * @desc  Update the matching Product instance
 * @access Private
 */
router.put('/:productId', (req, res) => {
    //Verify that a Product with this productId exists
    Product.findOne({ _id: req.params.productId })
        .then(product => {

            //Get the Product fields the client wants to update
            const updatedProductFields = Object.keys(req.body)

            //Create an object from the k,v of the fields to update
            let productUpdates = {}

            updatedProductFields.map(field => {
                productUpdates[field] = req.body[field]
            })

            //Construct a 'query' obj to search the 'products' DB collection with
            let productQuery = { _id: req.params.productId}

            //Update the matching Product item in the DB
            Product.updateOne(productQuery, productUpdates)
                .then(updatedProduct => {
                    res.json({
                        successMsg: `This Product(id: ${updatedProduct._id}) has been updated.`,
                        updated_product: updatedProduct
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        errorMsg: `This Product(id: ${req.params.productId}) could not be updated.`,
                        error: err
                    })
                })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `A Product (id: ${req.params.productId}) does not exist.`,
                error: err
            })
        })
})

/**
 * @route DELETE api/products/:productId
 * @desc  Delete the matching Product instance.
 * @access Private
 */
router.delete('/:productId', (req, res) => {
    Product.findOne({ _id: req.params.productId})
        .then(product => {
            product.remove()
                .then(() => {
                    res.json({
                        successMsg: `The Product (id: ${req.params.productId}) has been deleted.`
                    })
                })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg:  `A Product with id ${req.params.productId} does not exist.`,
                error: err
            })
        })
})

/**
 * @route   GET api/products/in/:categoryId
 * @desc    Get a list of all products in a matching Category
 * @access  Public 
 */
router.get('/in/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId

    //Step One: Verify that the Category exists
    Category.findOne({ _id: categoryId})
        .then(category => {
            if(!category){
                res.status(400).json({
                    errorMsg: `Sorry, that Category (id:{categoryId}) does not exist`
                })
            }else {
                //Get all Products in this Category 
                Product.find({ category: category})
                    .then(product_list => {
                        if(product_list.length > 0){
                            res.json({
                                successMsg: `${product_list.length} Products were found in this Category(id: ${categoryId})`,
                                product_list: product_list
                            })
                        }else {
                            res.status(404).json({
                                errorMsg: `No Products in this Category (id: ${categoryId})`
                            })
                        }
                    })
            }
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `Sorry, a Category with id (${categoryId}) does not exist.`,
                error: err
            })
        })

})

module.exports = router 