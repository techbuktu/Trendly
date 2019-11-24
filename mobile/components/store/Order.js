import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

class Order extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text> List of Products 'purchased' ('Buy' button pressed in ProductDetail screen.) </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Order
