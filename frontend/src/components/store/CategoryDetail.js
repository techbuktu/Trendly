import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryApi from '../../api/store/CategoryApi'

import { Link } from 'react-router-dom'

class CategoryDetail extends Component {
    static propTypes = {

    }

    constructor(props){
        super(props)
        this.state = {
            category: {},
            product_list: []
        }
        //this.getCategoryDetails()
    }

   componentDidMount(){
       this.getCategoryDetails()

   }

   getCategoryDetails(){
    CategoryApi.getCategory('5de9d49ea59fec9005851fc1')
        .then(res => {
            console.log(`res.data.category: ${res.data.category}`)
            this.setState({
                category: res.data.category
            }, () => {
                this.getProductsinCategory()
            })
        })
        .catch(err => console.log(`error: ${err}`))
   }

   getProductsinCategory(){
       CategoryApi.getProductsinCategory(this.state.category._id)
        .then(res => {
            this.setState({
                product_list: res.data.product_list
            }, () => console.log(`products: ${this.state.product_list}`))
        })
        .catch(err => console.log(`error: ${err.message}`))
   }

    render() {
        const {category, product_list} = this.state
        console.log(category.name)

        const productListUI = product_list.map(product => {
            return (
                <li key={product._id}>
                    <Link to={`/products/${product._id}`}>
                    {product.name}
                </Link>
                </li>
            )
        })

        if(this.state.category.name){
            return (
                <React.Fragment>
                    <div>
                    <h3>
                        {category.name}
                    </h3>
                    <p>
                        {category.description}
                    </p>
                </div>
                <div>
                    <ul>
                        {productListUI}
                    </ul>
                </div>
                </React.Fragment>
            )
        } else {
            return(
                <>
                    No data is ready yet.
                </>
            )
        }
    }
}

CategoryDetail.propTypes = {
   category: PropTypes.object
}

export default CategoryDetail