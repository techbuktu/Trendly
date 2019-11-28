import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet  } from 'react-native'

import OrderApi from '../../api/store/OrderApi'

class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            _id: 1,
            product_list : [
                {   'name': 'Product One',
                    'price': 7,
                    '_id': 1
                },
                {   'name': 'Product Two',
                    'price': 17,
                    '_id': 2
                },
                {   'name': 'Product Three',
                    'price': 27,
                    '_id': 3
                }
            ]
        }
    }


    extractKey(item){
        return item._id
    }
    
    renderItem({item}){
        return(
            <View>
                <Text style={styles.itemStyle} onPress={{}}>
                    {item.name} : ${item.price}
                </Text>
            </View>
        )
    }
    render() {
        return (
           <React.Fragment>
                <View>
                    <Text style={styles.listTitle}> List of Products 'purchased' ('Buy' button pressed in ProductDetail screen.) </Text>
                </View>
                <FlatList
                    style ={styles.listContainer}
                    data = {this.state.product_list}
                    renderItem = {this.renderItem}
                    keyExtractor={this.extractKey}
                />
           </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    },
    listTitle: {
        textAlign: "center"
    },
    itemStyle: {

    }

})

export default Order
