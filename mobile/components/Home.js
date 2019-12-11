import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ProductApi from '../api/store/ProductApi'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_list: []
        }
    }

    componentDidMount(){
        console.log(`homeStyles obj: ${homeStyles}`)
        ProductApi.getAllProducts()
            .then(res => {
                this.setState({
                    product_list: res.data
                }, () => {
                    console.log(`this.state.product_list: ${this.state.product_list}`)
                })
            })
            .catch( err => console.log(`ProductApi.getAllProducts() err: ${err}`))
            .finally(() => console.log('ProductApi.getAllProducts() done running...'))

    }

    render() {
        if(this.state.product_list){
            const productListUI = this.state.product_list.map(product => {
                return (
                    <View>
                        <Text> Product => {product.name}: {product.price} </Text>
                    </View>
                )
            })
        }else {
            const productListUI = (
                <View>
                    <Text> No products to list.</Text>
                </View>
            )
        }
        if(this.state.product_list){
            return (
                <React.Fragment>
                    
                    <View style={ homeStyles.title }>
                        <Text> 
                            Home component, with 'links' to other sections and/OR list of 
                            currently-available (Product.isAvailable)
                            products.
                        </Text>
                    </View>
                    {productListUI}
                </React.Fragment>
            )
        } else {
            <View style={ homeStyles.title }>
                <Text> No products to show yet.</Text>
            </View>
        }
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
