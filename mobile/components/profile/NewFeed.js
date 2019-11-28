import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'
import FeedApi from '../../api/profile/FeedApi'

class NewFeed extends Component {
    render() {
        return (
            <View>
                <Text> Form for adding a new Feed update </Text>
            </View>
        )
    }
}


const feedStyles = StyleSheet.create({

})


export default NewFeed
