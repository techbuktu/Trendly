import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

class Comment extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text> Comment box </Text>
            </View>
        )
    }
}

const commentStyles = StyleSheet.create({

})

export default Comment
