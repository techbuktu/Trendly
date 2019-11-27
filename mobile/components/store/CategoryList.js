import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet  } from 'react-native'

class CategoryList extends Component {
    constructor(props){
        super(props)
        this.state = {
            category_list: []
        }
    }
    
    getCategoryList(){
        //Use CategoryApi.getAllCategories() and pass res to state.category_list
    }
    render() {
        return (
           <React.Fragment>
                <View>
                    <Text style={styles.listTitle}> List of product categories in this Store. </Text>
                </View>
                <ScrollView style={styles.listContainer}>
                    {this.state.category_list.map(category => (
                        <View style={styles.categoryStyle}>
                            {category.name}
                        </View>
                    ))}
                </ScrollView>
           </React.Fragment>

        )
    }
}

const styles = StyleSheet.create({
    listTitle: {
        textAlign: "center"
    },
    listContainer: {
        flex: 1,
        margin: "5%"
    },
    categoryStyle: {

    }
})

export default CategoryList
