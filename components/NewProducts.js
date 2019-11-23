import React from 'react'
import { View, Text } from 'react-native'

import ProductFeed from './ProductFeed'

const NewProducts = () => {
    let new_products = []
    return (
        <View>
            <Text>New Products</Text>
        </View>
        <ProductFeed 
            product_list={new_products}
        />
    )
}

export default NewProducts
