import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home'
import CategoryList from '../components/CategoryList'
import CategoryDetail from '../components/CategoryDetail'

import BrandSectionDetail from '../components/BrandSectionDetail'
import ProductDetail from '../components/ProductDetail'

export const CategoryNav = createStackNavigator(
    {
        CategoryList: {screen: CategoryList},
        CategoryDetail: {screen: CategoryDetail}
    },
    {
        initialRouteName: 'CategoryList'
    }
)

export const BrandsNav = createStackNavigator(
    {
        BrandSectionDetail: {screen: BrandSectionDetail},
        ProductDetail: {screen: ProductDetail}
    },
    { 
        initialRouteName: 'BrandSectionDetail'
    }
)

const StackNav = createStackNavigator(
    {
        Home: {screen: Home}
    }, //RoutesConfig
    {} //StackNavConfigs
)

export default StackNav