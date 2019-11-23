import React, { Component } from 'react'
import { Text, View } from 'react-native'

class CategoryDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text> List of products in this category. </Text>
            </View>
        )
    }
}

export default CategoryDetail
