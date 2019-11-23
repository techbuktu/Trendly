import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Home extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text> Home component, with 'links' to other sections and/OR list of currently-available (Product.isAvailable)
                    products.
                </Text>
            </View>
        )
    }
}

export default Home
