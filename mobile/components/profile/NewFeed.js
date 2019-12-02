import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet  } from 'react-native'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'
import FeedApi from '../../api/profile/FeedApi'

class NewFeed extends Component {
    constructor(props){
        super(props)
        this.state ={
            feedContent: ""
        }

        this.onChangeText = this.onChangeText.bind(this)
        this.submitFeedUpdate = this.submitFeedUpdate.bind(this)
    }

    onChangeText(value){
        this.setState({
            feedContent: value
        }, () => console.log(`this.state.feedContent: ${this.state.feedContent}`))
    }

    submitFeedUpdate(){
        if(this.state.feedContent === '') return
        const newFeed = {}
        newFeed["feedContent"] = this.state.feedContent
        let newFeedJSON = JSON.stringify(newFeed);
        FeedApi.postFeed(newFeedJSON)
            .then(res => {
                console.log('new feed submitted.')
            })
            .catch(err => {
                console.log(`FeedApi.postFeed() error: ${err}`)
            })
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <Text> Post a New Update </Text>
                <TextInput 
                    style={styles.inputBox}
                    value={this.state.content}
                    placeholder ="Add content here"
                    onChangeText = {val => this.onChangeText(val)}
                />
                <TouchableOpacity
                    onPress={this.submitFeedUpdate}>
                    <View style={styles.submitButton}>
                        <Text styles={styles.buttonText}> Post Update </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formTitle: {
        fontSize: 15,
        textAlign: "center"
    },
    formContainer: {
        padding: 10
    },
    inputBox: {
        color: "blue",
        alignContent: "flex-start",
        textAlign: "left",
        marginLeft: 15
    },
    submitButton: {
        width: "50%",
        marginLeft: "25%",
        alignSelf: "center"
    },
    buttonText: {
        fontSize: 55,
        color: "blue"
    }

})

export default NewFeed
