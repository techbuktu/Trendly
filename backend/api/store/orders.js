const express = require("express")
const router = express.Router()

const Order = require('../../models/store/Order')


/**
 * @route GET api/orders
 * @desc  Get a list of all Order instances.
 * @access Public 
 */
router.get('/', (req, res) => {
    Order.find({})
        .then(orders => {
            if(orders.length > 0){
                res.json({
                    successMsg: `${orders.length} Orders were found.`,
                    order_list: orders
                })
            }else {
                res.status(404).json({
                    errorMsg: `Sorry, no Orders were found.`
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `Something went wrong. See 'error' obj for details.`,
                error: err
            })
        })
})

/**
 * @route GET api/orders/:orderId
 * @desc  Get the matching Order with _id of :orderId
 * @access Public 
 */
router.get('/:orderId', (req, res) => {
    const orderId = req.params.orderId 
    Order.findById(orderId)
        .then(order => {
            res.json({
                order: order
            })
        })
        .catch(err => {
            res.status(400).json({
                errorMsg: `An Order with id (${orderId}) was not found.`,
                error: err
            })
        })

})

/**
 * @route POST api/orders
 * @desc  Create a new Order model instance
 * @access Public 
 */
router.post('/', (req, res) => {
    const {user, product_list} = req.body 

    if(!user || !product_list){
        return res.json({
            errorMsg: `Please, send all required fields' data.`
        })
    }

    //Verify that this is not a duplicate Order
    Order.findOne({ user, product_list})
        .then(order => {
            if(order){
                res.status(400).json({
                    errorMsg: `An Order with this id (${order._id}) already exists.`
                })
            }else {
                const newOrder = new Order({
                    user, product_list
                })

                newOrder.save()
                    .then(new_order => {
                        res.json({
                            new_order: new_order
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            errorMsg: `Please, check and make sure you sent valid data.`,
                            error: err
                        })
                    })
            }
        })
})

/**
 * @route PUT api/orders/:orderId
 * @desc  Update the matching Order instance
 * @access Private
 */
router.put('/:orderId', (req, res) => {

    const orderId = req.params.orderId
    //Verify that this Order object exists
    Order.findOne({ _id: orderId})
        .then(order => {
            if(order){
                const newProductList = req.body["product_list"]

                let productListUpdate = {product_list: newProductList}

                let query = { _id: orderId}

                Order.updateOne(query, productListUpdate, (err) => {
                    if(err){
                        res.status(400).json({
                            errorMsg: `Order (id: ${orderId}) could not be updated. Make sure you sent valid data.`,
                            error: err
                        })
                    }else {
                        Order.findById(orderId)
                            .then(updatedOrder => {
                                res.json({
                                    successMsg: `You have successfully-updated this Order (id: ${orderId})`,
                                    updated_order: updatedOrder
                                })
                            })
                            .catch(err => {
                                errorMsg: `Something went wrong.`,
                                error: err
                            })
                    }
                })
            }else {
                res.status(400).json({
                    errorMsg: `A matching Order object does not exist.`,
                })
            }
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `A matching Order could not be found.`,
                error: err
            })
        })
})

/**
 * @route DELETE api/orders/:orderId
 * @desc  Delete the matching Order instance.
 * @access Private
 */
router.delete('/:orderId', (req, res) => {
    //Check if matching Order exists

    Order.findOne({ _id: req.params.orderId})
        .then(order => {
            if(order){
                order.remove()
                    .then(() => {
                        res.json({
                            successMsg: `You have deleted this Order (id: ${req.params.orderId})`
                        })
                    })
                    .catch(err => {
                        res.status(403).json({
                            errorMsg: `Make sure you have the proper permissions. Order could not be deleted.`,
                            error: err
                        })
                    })
            }
        })
        .catch(err => {
            res.status(404).json({
                errorMsg: `Order (id: ${req.params.orderId}) does not exist`,
                error: err
            })
        })
})


module.exports = router 