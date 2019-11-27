import { createStackNavigator } from 'react-navigation-stack';

import CategoryList from '../components/store/CategoryList'
import CategoryDetail from '../components/store/CategoryDetail'
import ProductDetail from '../components/store/ProductDetail'
import Cart from '../components/store/Cart'
import OrderList from '../components/store/OrderList'
import Order from '../components/store/Order'

const productsNav = createStackNavigator(
    {
        Categories: {screen: CategoryList},
        Category: {screen: CategoryDetail},
        Product: {screen: ProductDetail},
        Cart: {screen: Cart},
        Orders: {screen: OrderList},
        Order: { screen: Order}
    },
    {
        initialRouteName: "Order"
    })

export default productsNav