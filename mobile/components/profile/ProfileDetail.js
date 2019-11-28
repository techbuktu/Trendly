import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'

class ProfileDetail extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text> Details/info about a User Profile </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        justifyContent: "center",
        color: Colors.blue
    },
    image: {

    },
    about: {

    },
    feedContainer: {

    }
})

export default ProfileDetail
