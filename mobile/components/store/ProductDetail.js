import React, { Component } from 'react'
import { Text, View, StyleSheet,
        Button, TouchableHighlight
    } from 'react-native'

import PropTypes from 'prop-types'

import ProductApi from '../../api/store/ProductApi'

class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_id: "5df93d8c31b61463016f1667"
        }
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

    likeProduct(){
        //LikeApi.likeProduct(product_id, user_id)
    }
    
    render() {
        return (
            <View>
                <Text> Details about a Product. </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

ProductDetail.propTypes ={
    product: PropTypes.object.isRequired
}

export default ProductDetail
