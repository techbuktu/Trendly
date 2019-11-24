import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

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

const styles = StyleSheet.create({

})

export default CategoryDetail
