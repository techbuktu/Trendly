import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

import LikeApi from '../../api/profile/LikeApi'

class Like extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View>
                <Text> UI for liking an Object </Text>
            </View>
        )
    }
}

const likeStyles = StyleSheet.create({

})

export default Like
