import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,
        Button, TouchableHighlight
    } from 'react-native'

import PropTypes from 'prop-types'

import ProductApi from '../../api/store/ProductApi'

class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_id: "5df93d8c31b61463016f1667",
            product: {}
        }
    }

    componentDidMount(){
        // or get this from this.props from parent CategoryDetail afterwards
        ProductApi.getProduct(this.state.product_id)
            .then(res => {
                this.setState({
                    product: res.data.product
                }, () => {
                    console.log(`Product name: ${this.state.product.name}`)
                })
            })
            .catch(err => {
                console.log(`Error: ${err.errorMsg}`)
            })

    }

    orderProduct(){
        //Use OrderApi.buyProduct(product_id, user_id)
    }

    likeProduct(){
        //LikeApi.likeProduct(product_id, user_id)
    }
    
    render() {
        return (
           <React.Fragment>
                <View>
                    <Text style={styles.productName}> {this.state.product.name} </Text>
                </View>
                <Image
                        style={styles.image}
                        source={{uri: 'http://jalloh.com/static/jalloh/photos/mjalloh.jpeg'}}
                />
                <View>
                    <Text style={styles.description}>
                        {this.state.product.description}
                    </Text>
                </View>
                <View>
                    <Text style={styles.price}>
                        ${this.state.product.price}
                    </Text>
                </View>
           </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    productName: {
       textAlign: "center",
       margin: 10
    },
    description: {
        margin: 10,
        textAlign: "center"
    },
    image: {
        alignItems: "center",
        marginLeft: 120,
        height: 250,
        width: 200
    },
    price: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
})

ProductDetail.propTypes ={
    product: PropTypes.object.isRequired
}

export default ProductDetail
