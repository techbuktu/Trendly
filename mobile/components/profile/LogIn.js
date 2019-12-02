import React, { Component } from 'react'
import { Text, View, TextInput, 
    TouchableOpacity, StyleSheet  
    } from 'react-native'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'

class LogIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.onChangeText = this.onChangeText.bind(this)
        this.processLogin = this.processLogin.bind(this)
    }

    onChangeText(key, value){
        this.setState({
            [key]: value
        }, () => {
            console.log(`this.state: ${this.state[key]}`)
        })
    }

    processLogin(){
        if (this.state.email === '' || this.state.password === '') return
        console.log('form submitted')
        const loginCreds = {}
        loginCreds["email"] = this.state.email 
        loginCreds["password"] = this.state.password

        let loginJSON = JSON.stringify(loginCreds)
        UserApi.loginUser(loginJSON)
            .then(res => {
                console.log('login successful')
                //navigate to Home component
            })
            .catch(err => {
                console.log(`err: ${err}`)
            })
            .finally(() => {
                console.log(`loginJSON: ${loginJSON}`)
                this.setState({
                    email: "",
                    password: ""
                })
            })
    }
    render() {
        return (
            <View>
                <Text style={styles.formTitle}> Login to Your Account</Text>

            <View style={styles.formContainer}>
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
                <TouchableOpacity
                    onPress={this.processLogin}>
                    <View style={styles.submitButton}>
                        <Text styles={styles.buttonText}> Login</Text>
                    </View>
                </TouchableOpacity>
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
        alignSelf: "center"
    },
    buttonText: {
        fontSize: 55,
        color: "blue"
    }

})

export default LogIn