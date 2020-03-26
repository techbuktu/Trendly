import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentApi from '../../api/profile/CommentApi'

export class CommentDetail extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                Details of this comment: poster, body, commentDate 
            </div>
        )
    }
}

export default CommentDetail
