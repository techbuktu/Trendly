import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Cart from '../components/store/Cart'
import Order from '../components/store/Order'


export const TopTabNav = createMaterialTopTabNavigator(
    {
        Cart: { screen: Cart},
        Orders: { screen: Order}
    },
    {
        //initialRouteName: "Cart",
        headerStyle: {
            color: 'green'
        }
    }
)

const TopTabAppContainer = createAppContainer(TopTabNav)

export default TopTabAppContainer