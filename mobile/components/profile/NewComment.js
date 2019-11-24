import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

class NewComment extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text> Form posting a new comment to a Feed, "review" for a Product, etc. </Text>
            </View>
        )
    }
}


const commentStyles = StyleSheet.create({

})

export default NewComment
