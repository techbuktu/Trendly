import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Home extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(`homeStyles obj: ${homeStyles}`)
    }

    render() {
        return (
            <View style={ homeStyles.title }>
                <Text> 
                    Home component, with 'links' to other sections and/OR list of 
                    currently-available (Product.isAvailable)
                    products.
                </Text>
            </View>
        )
    }
}


const homeStyles = StyleSheet.create({ 
    title: {
        flex:1,
        justifyContent: "center",
        margin: 10
    }
})

export default Home