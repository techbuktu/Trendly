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
                Home Component of the Trendly marketplace.
                <p>
                    Another short paragraph.
                </p>
            </div>
        )
    }
}


export default Home
