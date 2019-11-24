import { StackNav } from './stackNav';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home'

import BottomTabNav from './bottomTabNav'
import TopTabNav from './topTabNav'
import TopTabAppContainer from './topTabNav'

const AppNav = createStackNavigator({
        TopNav: {screen: TopTabNav},
        BottomNav: {screen: BottomTabNav},
    },
    {
        initialRouteName: "BottomNav"

    }
)

export const AppNavContainer = createAppContainer(AppNav)
