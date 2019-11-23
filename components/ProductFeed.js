import React, { Component } from 'react'
import { Text, View } from 'react-native'

import ProductDetail from './ProductDetail'

class ProductFeed extends Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount(){

    }

    render() {
        return (
            <View>
                <Text> List of products passed as props.product_list //screenProps.product_list </Text>
            </View>
            <ProductDetail />
        )
    }
}

export default ProductFeed
