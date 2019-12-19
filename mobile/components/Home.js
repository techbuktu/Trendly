import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ProductApi from '../api/store/ProductApi'
import CategoryApi from '../api/store/CategoryApi'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            category_list: [],
            product_list: []
        }
    }

    componentDidMount(){
        this.getCategoryList()
        this.getAllProducts()
    }

    getCategoryList(){
        CategoryApi.getAllCategories()
            .then(res => {
                this.setState({
                    category_list: res.data.category_list
                }, () => {
                    console.log(`this.state.category_list: ${this.state.category_list.length}`)
                })
            })
            .catch(err => {
                console.log(`CategoryApi.getAllCategories() error: ${err}`)
            })
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
                <View>
                    <Text> New Here? Register </Text>
                </View>
                <View>
                    <Text> Have an Account> Login</Text>
                </View>
                <View style={ homeStyles.title }>
                    <Text> 
                        These are our Product Categories
                    </Text>
                </View>
                {this.state.category_list.map(category => {
                    return(
                        <View key={category._id}>
                            <Text>
                                {category.name}
                            </Text>
                        </View>
                    )
                })}
                <View style={ homeStyles.title }>
                    <Text> 
                        Our Latest Products are...
                    </Text>
                </View>
                {
                    this.state.product_list.map(product => {
                        return (
                            <View key={product._id}>
                                <Text> Product => {product.name}: {product.price} </Text>
                            </View>
                        )
                    })
                }
            
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
