import {createStackNavigator} from 'react-navigation-stack';


// import BottomTabNavigator from './BottomTabNavigator';

import screens from '../screens/index';

const MainNavigator = createStackNavigator({
  // Tab: BottomTabNavigator,
  Login: screens.LoginScreen,
  Register: screens.RegistrationScreen,
},
{
    initialRouteName:'Login',
    
});

export default MainNavigator;
