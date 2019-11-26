import { StackNav } from './stackNav';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home'
import React from 'react'

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

/**
 const AppNav = () => {
     return (
         <React.Fragment>
             <TopTabNav/>
            <BottomTabNav/>
         </React.Fragment>
     )
 }
  */

const AppNavContainer = createAppContainer(AppNav)

export default AppNavContainer