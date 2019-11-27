import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

class OrderList extends Component {
    constructor(props){
        super(props)
        this.state = {
            order_list: [
                { '_id': 1,
                 'title': 'Books'
                },
                { '_id': 2,
                 'title': 'Gifts for Birthday'
                },
                { '_id': 3,
                 'title': 'November Sale'
                }
            ]
        }
    }

    componentDidMount(){
        //Call API and populate this.state.order_list
        this.getOrderList()
    }

    getOrderList(){
        //OrderApi.getOrders() and then setState({})
    }

    onPressHandler(){
        //navigate to 'Order' screen
        return;
    }

    render() {
        return (
            <React.Fragment>
                <View>
                    <Text style={styles.title}> List of Orders by this User </Text>
                </View>
                <ScrollView>
                    {this.state.order_list.map(order => (
                        <View key={order._id} onPress={this.onPressHandler}>
                            <Text> {order.title} </Text>
                        </View>
                    ))}
                </ScrollView>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "blue"
    }
})

export default OrderList
