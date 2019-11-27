import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet  } from 'react-native'

class CategoryList extends Component {
    constructor(props){
        super(props)
        this.state = {
            category_list: [
                {'name': 'Clothing', 
                '_id':1 
                },
                {'name': 'Shoes', 
                '_id':2 
                },
                {'name': 'Coats', 
                '_id':3 
                },
            ]
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
                        <View style={styles.categoryStyle} key={category._id} onPress={{}}>
                           <Text> {category.name}</Text>
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
