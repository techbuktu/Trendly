import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentApi from '../../api/profile/CommentApi'

class Feed extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                List of Comments/Updates in this Feed.
            </div>
        )
    }
}

export default Feed
