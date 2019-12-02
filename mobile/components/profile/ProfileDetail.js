import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import UserApi from '../../api/profile/UserApi'
import ProfileApi from '../../api/profile/ProfileApi'
import FeedApi from '../../api/profile/FeedApi'
import CommentApi from '../../api/profile/CommentApi'

import Feed from './Feed'
import NewFeed from './NewFeed'


class ProfileDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {
                _id: 123,
                firstName: "Muhammad",
                lastName: "Jalloh",
                email: "me@Jalloh.com"
            },
            profile: {
                feed: {},
                _id: 12345,
                about: `My name is Muhammad Jalloh. I am the founder of TechBuktu. This is my personal bio and pro blurb.
                `
            }
        }


    }

    componentDidMount(){
        //UserApi.getUser() and setState({user})
        //ProfileApi.getSingleProfile(user_id) and setState({profile})
    }

    render() {
        return (
            <React.Fragment>
                <View>
                    <Text style={styles.profileHeading}> {this.state.user.firstName} {this.state.user.lastName} </Text>
                    <Image
                        style={styles.profileImage}
                        source={{uri: 'http://jalloh.com/static/jalloh/photos/mjalloh.jpeg'}}
                    />
                    <Text style={styles.aboutText}>
                        {this.state.profile.about}
                    </Text>
                </View>
                <Feed user={this.state.user} />
            </React.Fragment>
           
        )
    }
}

const styles = StyleSheet.create({
    profileHeading: {
        textAlign: "center",
        color: "blue"
    },
    profileImage: {
        alignItems: "center",
        marginLeft: 120,
        height: 150,
        width: 100
    },
    aboutText: {
        padding: 10,
        margin: 10

    },
    feedContainer: {

    }
})

export default ProfileDetail
