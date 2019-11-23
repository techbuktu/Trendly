import React from 'react'
import { View, Text } from 'react-native'

import ProductFeed from './ProductFeed'

const Home = () => {
    let product_list = []
    return (
        <>
            <View>
            <Text>Home</Text>
            </View>
            <ProductFeed 
                product_list={product_list}
            />
        </>
    )
}

export default Home
