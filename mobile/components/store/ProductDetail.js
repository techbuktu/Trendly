import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,
        Button, TouchableHighlight
    } from 'react-native'

import PropTypes from 'prop-types'

import ProductApi from '../../api/store/ProductApi'
import CartApi from '../../api/store/CartApi'

class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_id: "5df93d8c31b61463016f1667",
            owner: "5df9376631b61463016f164f", //Remove after JWT auth setup
            product: {},
            new_cart: {},
            new_cart_error: ""
        }

        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        // or get this from this.props from parent CategoryDetail afterwards
        ProductApi.getProduct(this.state.product_id)
            .then(res => {
                this.setState({
                    product: res.data.product
                }, () => {
                    console.log(`Product name: ${this.state.product.name}`)
                })
            })
            .catch(err => {
                console.log(`Error: ${err.errorMsg}`)
            })

    }

    orderProduct(){
        //Use OrderApi.buyProduct(product_id, user_id)
    }

    createNewCart(){
        let newCartObj = {
            owner: this.state.owner,
            product_list: [this.state.product]
        }

        CartApi.newCart(JSON.stringify(newCartObj))
            .then(res => {
                console.log(`Newly-created cart: ${res.data.new_cart}`)
            })
            .catch(err => {
                console.log(`New cart creation error:${err.errorMsg}`)

            })
    }

    addToCart(){
        //Later: Move addtoCart() to top-level App() component and access as a prop?

        //If Cart; add to its product_list; 
        // else: Create new Cart with this product in its product_list []

        this.createNewCart()
        
        /**
        let newCartJson = JSON.stringify(newCart)
        CartApi.newCart(newCartJson)
            .then(res => {
                this.setState({
                    cart: res.data.new_cart 
                }, () => {
                    console.log('Product added to Cart!')
                })
            })
            .catch(err => {
                this.setState({
                    new_cart_error: err.errorMsg
                }, () => {
                    console.log(`new_cart_error: ${this.new_cart_error}`)
                })
            })
        //Cart.update here with this product in Cart.product_list
         */
    }

    likeProduct(){
        //LikeApi.likeProduct(product_id, user_id)
    }
    
    render() {
        return (
           <React.Fragment>
                <View>
                    <Text style={styles.productName}> {this.state.product.name} </Text>
                </View>
                <Image
                        style={styles.image}
                        source={{uri: 'http://jalloh.com/static/jalloh/photos/mjalloh.jpeg'}}
                />
                <View>
                    <Text style={styles.description}>
                        {this.state.product.description}
                    </Text>
                </View>
                <View>
                    <Text style={styles.price}>
                        ${this.state.product.price}
                    </Text>
                </View>
                <TouchableHighlight onPress={this.addToCart}>
                    <Button title="Add to Cart" style={styles.orderButton}>
                    </Button>
                </TouchableHighlight>
           </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    productName: {
       textAlign: "center",
       margin: 10
    },
    description: {
        margin: 10,
        textAlign: "center"
    },
    image: {
        alignItems: "center",
        marginLeft: 120,
        height: 250,
        width: 200
    },
    price: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    orderButton: {
        marginLeft: 20
    }
})

ProductDetail.propTypes ={
    product: PropTypes.object.isRequired
}

export default ProductDetail
