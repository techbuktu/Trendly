import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrderApi from '../../api/store/OrderApi'
import UserApi from '../../api/profile/UserApi'

class OrderList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                List of individual Orders represented by purchases made by this User.
            </div>
        )
    }
}

export default OrderList
