import React from 'react'
import { View, Text } from 'react-native'

import ProductFeed from './ProductFeed'

const BrandSectionDetail = () => {
    let brand_products = []
    return (
        <View>
            <Text> Brand Products </Text>
        </View>
        <ProductFeed 
            product_list={brand_products}
        />
    )
}

export default BrandSectionDetail
