import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'

class LogIn extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text> LogIn form </Text>
            </View>
        )
    }
}


const loginStyles = StyleSheet.create({

})

export default LogIn
