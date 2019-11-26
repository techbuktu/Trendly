import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../components/Home';

import { CategoryNav, ProfileNav } from './stackNav'
import profileNav from './profileNav' 

export const BottomTabNav = createBottomTabNavigator({
        Home: {screen: Home},
        Categories: {screen: CategoryNav},
        Me: { screen: profileNav }
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