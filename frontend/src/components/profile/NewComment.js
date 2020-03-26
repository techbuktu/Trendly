import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentApi from '../../api/profile/CommentApi'

export class NewComment extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                Form to create a new comment. Using fields from backend's Comment model.
            </div>
        )
    }
}

export default NewComment
