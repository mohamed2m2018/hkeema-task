import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import screens from '../screens/index';

const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    Home: screens.HomeScreen,
    Records: screens.RecordScreen,
    Book: screens.BookScreen,
    Appointment: screens.AppointmentScreen,
    Profile: screens.ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Records', 'Book', 'Appointment', 'Profile'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: false,
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#008388',
      style: {
        backgroundColor: '#008388',
        borderTopWidth: 0.5,
        borderTopColor: '#FFA963',
      },
      labelStyle: {
        fontSize: 8,
        fontFamily: 'bold',
        width: '100%',
        alignSelf: 'center',
      },
      iconStyle: {
        paddingLeft:4,
        width: 35,
        height: 25,
        paddingBottom: 10,
        alignSelf:'center'
      },
      indicatorStyle: {
        backgroundColor: '#FFA963',
      },
    },
  },
);

export default BottomTabNavigator;
