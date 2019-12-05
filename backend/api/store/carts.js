const express = require("express")
const router = express.Router()

const Cart = require('../../models/store/Cart')
/**
 * @route GET api/carts
 * @desc  Get a list of all Cart instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    Cart.find()
        .then(carts => {
            if(carts.length > 0){
                res.json({
                    successMsg: `${carts.length} Carts were found.`,
                    cart_list: carts
                })
            }else {
                res.status(404).json({
                    errorMsg: `No Carts were found.`
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                errorMsg: `Sorry, something went wrong.`,
                error: err
            })
        })
})

/**
 * @route GET api/carts/:cartId
 * @desc  Get the matching Cart with _id of :cartId
 * @access Public 
 */
router.get('/:cartId', (req, res) => {
    Cart.findOne({ _id: req.params.cartId})
        .then(cart => {
            res.json({
                cart: cart
            })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `A Cart with this id (${req.params.cartId}) does not exist`,
                error: err 
            })
        })

})

/**
 * @route POST api/carts
 * @desc  Create a new Cart model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    const {owner, product_list} = req.body 

    if(!owner || !product_list){
        return res.status(400).json({
            errorMessage: `Please, send all required fields' values.`
        })
    }

    // Create a new Cart object from the data sent in by the client
    const newCart = new Cart({owner, product_list})

    newCart.save()
        .then(new_cart => {
            res.json({
                new_cart: new_cart
            })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `Please, check and send valid data only.`,
                error: err
            })
        })
})

/**
 * @route PUT api/carts/:cartId
 * @desc  Update the matching Cart instance to add/remove new Products to it, etc.
 * @access Private
 */
router.put('/:cartId', (req, res) => {
    //Verify that this Cart exists
    const cartId = req.params.cartId
    Cart.findById(cartId)
        .then(cart => {
            if(cart){
                //Get a list of fields to update. Only 'product_list' field allowed here
                const product_list = req.body.product_list
                if(product_list){
                    let query = { _id: cartId}
                    let newProductList = {product_list: req.body["product_list"]}

                    Cart.updateOne(query, newProductList, (err) => {
                        if(err){
                            res.status(500).json({
                                errorMsg: `This Cart (id: ${cartId}) could not be updated.`,
                                error: err
                            })
                        }else {
                            Cart.findOne({ _id: cartId})
                                .then(updatedCart => {
                                    res.json({
                                        successMsg: `You have successfully-updated the Cart (id: ${updatedCart._id})`,
                                        updated_cart: updatedCart
                                    })
                                })
                                .catch(err => {
                                    res.status(404).json({
                                        errorMsg: `Sorry, something went wrong.`,
                                        error: err
                                    })
                                })
                        }
                    })
                }
            }
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `A Cart with this id (${cartId}) does not exist.`,
                error: err
            })
        })
})

/**
 * @route DELETE api/carts/:cartId
 * @desc  Delete the matching Cart instance.
 * @access Private
 */
router.delete('/:cartId', (req, res) => {
    //Make sure this Cart exists
    const cart = Cart.findOne({ _id: req.params.cartId})

    if(!cart){
        res.status(400).json({
            errorMsg: `A Cart with id (${req.params.cartId}) does not exist.`
        })
    }else {
        cart.remove()
            .then(() => {
                res.json({
                    successMsg: `You have successfully-deleted the Cart with id: ${req.params.cartId}`
                })
            })
            .catch(err => {
                res.status(403).json({
                    errorMsg: `Cart could not be deleted. Make sure you have the proper permissions.`,
                    error: err
                })
            })
    }
})

module.exports = router 