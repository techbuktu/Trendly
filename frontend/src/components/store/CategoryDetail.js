import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryApi from '../../api/store/CategoryApi'
import ProductApi from '../../api/store/ProductApi'

class CategoryDetail extends Component {
    static propTypes = {

    }

    constructor(props){
        this.state = {
            category: {}
        }
    }

   componentDidMount(){

   }


    render() {
        return (
            <div>
                <h3>
                    {this.props.category.name}
                </h3>
                <p>
                    List of available Products in this Category only.
                </p>
            </div>
        )
    }
}

CategoryDetail.propTypes = {
    category: PropTypes.object.isRequired
}

export default CategoryDetail
