import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

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

const styles = StyleSheet.create({

})

export default CategoryList