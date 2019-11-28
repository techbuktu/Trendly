import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet  } from 'react-native'
import PropTypes from 'prop-types'

import CategoryApi from '../../api/store/CategoryApi'

class CategoryDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            product_list : [
                {   'name': 'Product One',
                    '_id': 1
                },
                {   'name': 'Product Two',
                    '_id': 2
                },
                {   'name': 'Product Three',
                    '_id': 3
                }
            ]
        }
    }

    getProductList(){
        //Use ProductApi.getCategoryProducts()
        // set product_list to data.product_list
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
                        List of products in this category. 
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
