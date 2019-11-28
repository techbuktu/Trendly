import React, { Component } from 'react'
import { Text, View, StyleSheet,
    TextInput, TouchableHighlight, Button  
    } from 'react-native'

import UserApi from '../../api/profile/UserApi'

class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstName: "",
            lastName: "",
            password: ""
        }

        this.submitForm = this.submitForm.bind(this)
    }
    
    componentDidMount(){

    }

    onChangeText(key, value){
        this.setState({
            [key]: value
        })
    }

    submitForm(){
        const new_user_obj = {}
        //UserApi.register(new_user_obj)
        console.log('form submitted...')
    }


    render() {
        return (
            <View>
                <Text> Create Your Trendly Account</Text>
                <View style={styles.inputBox}>
                    <Text> First Name: </Text>
                    <TextInput

                        value={this.state.firstName}
                        placeholder="Enter your first name"
                        onChangeText = {this.onChangeText(key, value)}
                    />
                </View>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.lastName}
                    placeholder="Enter your last name"
                    onChangeText = {this.onChangeText(key, value)}
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    placeholder="*******"
                    onChangeText = {this.onChangeText(key, value)}
                    
                />
                <Button 
                    style={styles.submitButton}
                    title="Register"
                    onPress={this.submitForm}

                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputBox: {
        color: "blue",
        alignContent: "flex-start",
        textAlign: "left"
    },
    submitButton: {
        width: "50%",
        marginLeft: "25%",
        alignSelf: "center"

    }

})

export default Register
