import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryApi from '../../api/store/CategoryApi'

class CategoryList extends Component {
    constructor(props){
        super(props)
        this.state = {
            category_list: []
        }


    }
    static propTypes = {

    }

    getCategories(){
        let category_list = []

        CategoryApi.getAllCategories()
            .then(res => {
                this.setState({
                    category_list
                }, () => {
                    console.log(`this.state.category_list: ${this.state.category_list}`)
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const categoryUI = this.state.category_list.map(category => {
            return (
                <li key={category.id}>
                    {category.name}
                </li>
            )
        })

        return (
            <div>
                List of Product Categories available in this <strong>eStore.</strong>
                <ul>
                    {categoryUI}
                </ul>
            </div>
        )
    }
}

export default CategoryList
