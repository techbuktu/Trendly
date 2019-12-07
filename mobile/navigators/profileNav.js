import { createStackNavigator } from 'react-navigation-stack';
import Register from '../components/profile/Register'
import LogIn from '../components/profile/LogIn'
import ProfileDetail from '../components/profile/ProfileDetail'


const profileNav = createStackNavigator(
    {
        Register: {screen: Register},
        Login: {screen: LogIn},
        Profile: {screen: ProfileDetail}
    },
    {
        initialRouteName: "Register"
    }
    )

export default profileNav