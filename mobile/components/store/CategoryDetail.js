import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet  } from 'react-native'
import PropTypes from 'prop-types'

import CategoryApi from '../../api/store/CategoryApi'

class CategoryDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            categoryId: "5df93bec31b61463016f1662", //Get from props later
            category: {
                active: true,
                _id: "5df93bec31b61463016f1662",
                name: "Suits",
                description: "Suits for the everyday gentleman.",
                addedDate: "2019-12-17T20:34:52.812Z",
                __v: 0
            },
            product_list : [
                
            ]
        }
    }

    componentDidMount(){
        this.getProductList()
    }

    getProductList(){
        ProductApi.getProductsinCategory(this.state.category._id)
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

    renderItem = ({item}) => {
        return (
        <Text onPress={{}}> {item.name} : $ {item._id} </Text>
        )
    }

    extractKey(item){
        return item._id
    }

    render() {
        return (
            <React.Fragment>
                <View>
                    <Text style={styles.listHeader}>
                        List of products in the {this.state.category.name} category. 
                    </Text>
                </View>
                <FlatList 
                    style={styles.listContainer}
                    data = {this.state.product_list}
                    renderItem = {this.renderItem}
                    keyExtractor = {this.extractKey}
                />
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        margin: "5%",
        flex: 1,
        alignContent: "flex-start",
        //alignItems: "flex-start"
    },
    listHeader: {
        fontSize: 20,
        textAlign: "center",
        color: "blue"
    },
    itemStyle: {

    }

})

CategoryDetail.propTypes = {
    category: PropTypes.object.isRequired
}

export default CategoryDetail
