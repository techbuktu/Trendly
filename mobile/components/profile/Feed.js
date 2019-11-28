import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'
import CommentApi from '../../api/profile/CommentApi'
import FeedApi from '../../api/profile/FeedApi'

class Feed extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View>
                <Text> Single feed update UI </Text>
            </View>
        )
    }
}

const feedStyles = StyleSheet.create({

})


export default Feed
