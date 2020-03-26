import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryApi from '../../api/store/CategoryApi'

class CategoryList extends Component {
    static propTypes = {

    }

    constructor(props){
        super(props)
        this.state = {
            category_list: [1,2,3,4,5]
        }
    }

    componentDidMount(){
        this.getCategories();
    }

    getCategories(){
        CategoryApi.getAllCategories()
            .then(res => {
                //console.log(`res.data: ${Object.keys(res.data)}`)
                this.setState({
                    category_list: res.data.category_list
                }, () => {
                    console.log(`this.state.category_list: ${this.state.category_list}`)
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        
            if(this.state.category_list.length > 0){
                console.log('this.state.category_list available.')
            }

            const categoryUI = this.state.category_list.map(category => {
                return(
                    <li>
                        {category.name}
                    </li>
                )
            })
            

        return (
            <div>
                List of Product Categories available in this <strong>eStore.</strong>
                <p>
                    See the list below.
                </p>
                <ul>
                    {categoryUI}
                </ul>
                <p>
                    See the list above.
                </p>
            </div>
        )
    }
}

export default CategoryList
