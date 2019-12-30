import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../components/Home';

import { CategoryNav, ProfileNav } from './stackNav'
import profileNav from './profileNav' 
import productsNav from './productsNav'


export const BottomTabNav = createBottomTabNavigator({
        Home: {screen: Home},
        Categories: {screen: productsNav},
        //Me: { screen: profileNav }
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