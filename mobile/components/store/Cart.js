import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet  } from 'react-native'

import CartApi from '../../api/store/CartApi'
import ProductApi from '../../api/store/ProductApi'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            _id:1, 
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

    getCartDetails(){
        //CartApi.getCartInfo(cart_id) and then setState({})
    }
    
    render() {
        return (
            <React.Fragment>
                <View>
                    <Text> UI for list of products added to a User's Cart. </Text>
                </View>
                <ScrollView>
                    {this.state.product_list.map(product => (
                        <View>
                            <Text> {product.name}: ${product.price} </Text>
                        </View>
                    ))}
                </ScrollView>
            </React.Fragment>
        )
    }
}


const styles = StyleSheet.create({

})

export default Cart
