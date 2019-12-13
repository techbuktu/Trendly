import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ProductApi from '../api/store/ProductApi'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_list: [
                {'name': 'Product One','price': 23.77}, 
                {'name': 'Product Two', 'price': 47.97}
            ]
        }
    }

    componentDidMount(){
        console.log(`homeStyles obj: ${homeStyles}`)
        this.getAllProducts()
    }

    getAllProducts(){
        ProductApi.getAllProducts()
            .then(res => {
                this.setState({
                    product_list: res.data.product_list
                }, () => {
                    console.log(`this.state.product_list: ${this.state.product_list}`)
                })
            })
            .catch( err => console.log(`ProductApi.getAllProducts() err: ${err}`))
            .finally(() => console.log('ProductApi.getAllProducts() done running...'))

    }

    render() {
        if(this.state.product_list){
            let productListUI = this.state.product_list.map(product => {
                return (
                    <View>
                        <Text> Product => {product.name}: {product.price} </Text>
                    </View>
                )
            })
        }else {
            let productListUI = (
                <View>
                    <Text> No products to list.</Text>
                </View>
            )
        }
        return (
            <React.Fragment>
                
                <View style={ homeStyles.title }>
                    <Text> 
                        Home component, with 'links' to other sections and/OR list of 
                        currently-available (Product.isAvailable)
                        products.
                    </Text>
                </View>
            {this.productListUI}
            </React.Fragment>
        )
    }
}


const homeStyles = StyleSheet.create({ 
    title: {
        flex:1,
        justifyContent: "center",
        margin: 10
    }
})

export default Home
