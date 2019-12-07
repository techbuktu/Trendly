import React, { Component } from 'react'
import { Text, View, StyleSheet,
    TextInput, TouchableHighlight, Button  
    } from 'react-native'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'

class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },

        this.submitForm = this.submitForm.bind(this)
    }
    
    componentDidMount(){

    }

    onChangeText(key, value){
        this.setState({
            [key]: value
        }, () => {
            console.log(`this.state: ${this.state[key]}`)
        })
    }

    submitForm(){
        if(this.state.firstName === '' || this.state.lastName === '' || this.state.password == '' || this.state.email === '') return
        const new_user_obj = {}
        //UserApi.createUser(new_user_obj)
        console.log('form submitted...')
        new_user_obj["firstName"] = this.state.firstName
        new_user_obj["lastName"] = this.state.lastName
        new_user_obj["email"] = this.state.email
        new_user_obj["password"] = this.state.password
        console.log(`new_user_obj: ${new_user_obj.firstName}`)

        //Submit valid form data using UserApi 
        UserApi.createUser(JSON.stringify(new_user_obj))
            .then(res => {
                //navigate to new User/Profile page.
                console.log('UserApi.createUser() success!')
            })
            .catch(err => {
                console.log('UserApi.createUser() error')
            })
            .finally()
    }

    render() {
        return (
            <View>
                <Text style={styles.formTitle}> Create Your Trendly Account</Text>

                <View style={styles.formContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.firstName}
                    placeholder="First name"
                    onChangeText = {value => this.onChangeText('firstName', value)}
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.lastName}
                    placeholder="Last name"
                    onChangeText = {value => this.onChangeText('lastName', value)}
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    placeholder="email@example.com"
                    onChangeText = {value => this.onChangeText('email', value)}
                    
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    placeholder="*******"
                    onChangeText = {value => this.onChangeText('password', value)}
                    
                />
                <View style={styles.submitButton}>
                    <TouchableHighlight
                        onPress={this.submitForm}>
                        <View>
                            <Text styles={styles.buttonText}> Register</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
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
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 55,
        color: "blue"
    }

})

export default Register
