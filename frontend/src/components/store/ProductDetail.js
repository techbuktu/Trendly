import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductApi from '../../api/store/ProductApi'

class ProductDetail extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                Details about a Product available for sale. Taken from backend Product model's fields.
            </div>
        )
    }
}

export default ProductDetail