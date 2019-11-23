import React from 'react'
import { View, Text } from 'react-native'

import ProductFeed from './ProductFeed'

const CategoryDetail = () => {
    let category_products = []
    return (
        <View>
            <Text>Category Detail</Text>
        </View>
        <ProductFeed 
            product_list={category_products}
        />
    )
}

export default CategoryDetail
