import React, { Component } from 'react'
import { Text, View, StyleSheet,
        Button, TouchableHighlight
    } from 'react-native'

import PropTypes from 'prop-types'

class ProductDetail extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        //ProductApi.getProductDetails()
        // or get this from this.props from parent CategoryDetail
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
