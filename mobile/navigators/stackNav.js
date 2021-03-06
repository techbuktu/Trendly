import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home'
import CategoryList from '../components/store/CategoryList'
import CategoryDetail from '../components/store/CategoryDetail'

import ProductDetail from '../components/store/ProductDetail'
import ProfileDetail from '../components/profile/ProfileDetail';
import LogIn from '../components/profile/LogIn'
import Register from '../components/profile/Register'

export const ProfileNav = createStackNavigator(
    {
        Me: { screen: ProfileDetail},
        Register: { screen: Register },
        LogIn: { screen: LogIn }

    },
    { 
        initialRouteName: 'Me'
    }
)


//export default StackNav