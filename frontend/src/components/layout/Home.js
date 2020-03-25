import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>
                <p>
                    Hey, if you are new here, please, take a minute to <Link to={`/register`}>register</Link> for an account.
                </p>
                <p>
                    Check out our <Link to={`/categories`}>product categories</Link> to buy the products you want.
                </p>
                <p>
                    Another short paragraph.
                </p>
            </div>
        )
    }
}


export default Home
