import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CategoryDetail extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <p>
                    Info about a Category object.
                </p>
                <p>
                    List of available Products in this Category only.
                </p>
            </div>
        )
    }
}

export default CategoryDetail
