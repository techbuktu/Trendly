import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../components/Home';

import { CategoryNav, BrandsNav } from './stackNav'


export const BottomTabNav = createBottomTabNavigator({
        Home: {screen: Home},
        Categories: {screen: CategoryNav},
        Brands: {screen: BrandsNav},
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                color: '#fff'
            }
        }
    }
)

export default BottomTabNav