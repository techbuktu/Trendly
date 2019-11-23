import React, { Component } from 'react'
import { Text, View } from 'react-native'

class CategoryList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text> List of product categories in this Store. </Text>
            </View>
        )
    }
}

export default CategoryList
