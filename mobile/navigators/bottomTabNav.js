import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../components/Home';

import { CategoryNav, ProfileNav } from './stackNav'


export const BottomTabNav = createBottomTabNavigator({
        Home: {screen: Home},
        Categories: {screen: CategoryNav},
        Me: { screen: ProfileNav }
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