import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect} from 'react-router-dom'
import CategoryApi from '../../api/store/CategoryApi'
import CategoryDetail from './CategoryDetail'

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
                   <>
                     <li key={category._id}>
                        <Link to={`/categories/${category._id}`}>{category.name}</Link>
                    </li>
                   </>
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

CategoryList.propTypes = {
    category_list: PropTypes.array
}

export default CategoryList
