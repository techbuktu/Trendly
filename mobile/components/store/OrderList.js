import React, { Component } from 'react'
import { Text, View } from 'react-native'

class OrderList extends Component {
    constructor(props){
        super(props)
        this.state = {
            order_list: []
        }
    }

    componentDidMount(){
        //Call API and populate this.state.order_list
    }
    render() {
        return (
            <View>
                <Text> List of Orders by this User </Text>
            </View>
        )
    }
}

export default OrderList
