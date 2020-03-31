import React, { Component } from 'react'
import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'

class Register extends Component {
    constructor(props){
        super(props)

        
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            newUserObj: {}
        }
        
        this.submitForm = this.submitForm.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    submitForm(e){
        e.preventDefault();
        const newUserObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        this.setState({ newUserObj }, () => {
            const newUserJson = JSON.stringify(this.state.newUserObj)
            UserApi.createUser(newUserJson)
                .then(res => {
                    console.log(`res.data.new_user: ${res.data.new_user.email}`)
                })
                .catch(err => console.log(`API error: ${err}`))

            })
        
    }
    

    onChange(e){
       
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    render() {
        return (
            <div>
                Form (using backend User model's fields) for registering for a Trendly account.
                <form onSubmit={this.submitForm}>
                    <p>
                        <label>First Name</label>
                        <input type="text" name="firstName"  defaultValue="" onChange={this.onChange} />
                    </p>
                    <p>
                        <label>Last Name</label>
                        <input type="text" name="lastName" defaultValue="" onChange={this.onChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" defaultValue="" onChange={this.onChange} />
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" name="password" defaultValue="" onChange={this.onChange} />
                    </p>
                    <p>
                        <input type="submit" defaultValue="Register"/>
                    </p>
                </form>
            </div>
        )
    }
}

export default Register