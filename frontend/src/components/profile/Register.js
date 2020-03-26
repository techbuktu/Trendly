import React, { Component } from 'react'
import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'

class Register extends Component {
    render() {
        return (
            <div>
                Form (using backend User model's fields) for registering for a Trendly account.
            </div>
        )
    }
}

export default Register