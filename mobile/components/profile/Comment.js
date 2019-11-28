import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput  } from 'react-native'

import CommentApi from '../../api/profile/CommentApi'
import UserApi from '../../api/profile/UserApi'

class Comment extends Component {
    constructor(props){
        super(props)
        this.state = {
            commenter: {'firstName': 'Muhammad'},
            commentBody: ""
        }
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
