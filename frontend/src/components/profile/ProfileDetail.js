import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/Profile'

class ProfileDetail extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                Details about a user profile; based on the backend Profile model.
            </div>
        )
    }
}

export default ProfileDetail
