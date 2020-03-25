import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Order extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                Record of a single Order made by this authenticated User.
                <p>
                    Contains the list of Products bought as part of this Order.
                </p>
            </div>
        )
    }
}

export default Order
