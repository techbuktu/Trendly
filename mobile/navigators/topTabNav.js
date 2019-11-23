import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import NewProducts from '../components/NewProducts'


export const TopTabNav = createMaterialTopTabNavigator(
    {
        New: { screen: NewProducts}
    },
    {
        headerStyle: {
            color: 'green'
        }
    }
)

const TopTabAppContainer = createAppContainer(TopTabNav)

export default TopTabAppContainer