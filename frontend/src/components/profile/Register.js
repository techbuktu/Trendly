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
            newUserObj : {}
        }
        
        this.submitForm = this.submitForm.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    submitForm(e){

    }

    onChange(e){
        let newUserObj = {}
        newUserObj[e.target.name] = e.target.value
        console.log(`newUserObj: ${newUserObj[e.target.name]}`)
    }

    render() {
        return (
            <div>
                Form (using backend User model's fields) for registering for a Trendly account.
                <form onSubmit={this.submitForm}>
                    <p>
                        <label>First Name</label>
                        <input type="text" name="firstName"  defaultValue={this.state.firstName} onChange={this.onChange} />
                    </p>
                    <p>
                        <label>Last Name</label>
                        <input type="text" name="lastName" defaultValue={this.state.lastName} onChange={this.onChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" defaultValue={this.state.email} onChange={this.onChange} />
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" name="password" defaultValue={this.state.password} onChange={this.onChange} />
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