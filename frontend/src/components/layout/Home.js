import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Home extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>
                Home of the Trendly marketplace.
            </div>
        )
    }
}


export default Home
