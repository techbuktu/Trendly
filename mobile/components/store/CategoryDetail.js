import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet  } from 'react-native'

class CategoryDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            product_list : []
        }
    }

    getProductList(){
        //Use ProductApi.getCategoryProducts()
        // set product_list to data.product_list
    }

    renderItem(item){
        return (
        <Text> {item.name} : ${item.price}</Text>
        )
    }

    extractKey(item){
        return item._id
    }

    render() {
        return (
            <React.Fragment>
                <View>
                    <Text style={styles.listHeader}> List of products in this category. </Text>
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

export default CategoryDetail
