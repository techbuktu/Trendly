import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'
import CommentApi from '../../api/profile/CommentApi'
import FeedApi from '../../api/profile/FeedApi'

import NewFeed from './NewFeed'

class Feed extends Component {
    constructor(props){
        super(props)
        this.state = {
            profileFeeds: [
                {content: 'I wrote the React native app.'},
                {content: 'I created the backend Node.js/Express/Mongo API'},
                {content: 'I wrote the docs and launched!'}
            ]
        }
    }

    getProfileFeed(){
        //FeedApi.getFeedsforUser(user_id)
    }

    updateFeedData(){
        //FeedApi.updateFeed()
    }
    
    render() {
        return (
            <React.Fragment>
                <NewFeed user={this.props.user} />
                <View>
                    <Text> My Latest Updates </Text>
                    {this.state.profileFeeds.map(feed => {
                        return (
                            <View>
                                <Text>
                                    {feed.content}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({

})


export default Feed
