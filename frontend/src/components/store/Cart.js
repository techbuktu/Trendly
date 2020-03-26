import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CartApi from '../../api/store/CartApi'

class Cart extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                List of Products in a user's Cart.
            </div>
        )
    }
}

export default Cart
