import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryApi from '../../api/store/CategoryApi'

class CategoryList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                List of Product Categories available in this <strong>eStore.</strong>
            </div>
        )
    }
}

export default CategoryList
