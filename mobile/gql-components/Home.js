import React from 'react'
import { View, Text } from 'react-native'

import { useQuery } from '@apollo/react-hooks'
import { PRODUCT_LIST_QUERY } from '../api/ProductListQuery'

import ProductFeed from './ProductFeed'

const Home = () => {
    let product_list = []
    const { loading, error, data } = useQuery({PRODUCT_LIST_QUERY});
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
