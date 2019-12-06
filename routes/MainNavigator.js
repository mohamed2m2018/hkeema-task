import {createStackNavigator} from 'react-navigation-stack';
import NotificationsIndicator from '../components/notifications/NotificationIndicator';
import BottomTabNavigator from './BottomTabNavigator';

import screens from '../screens/index';

import React from 'react';

import {View, TouchableWithoutFeedback, Text, TextInput} from 'react-native';

const MainNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Login: screens.LoginScreen,
    Register: screens.RegistrationScreen,
    ClinicVisit: screens.ClinicVisitScreen,
  },
  {
    initialRouteName: 'Tab',
    headerLayoutPreset: 'center',
    headerBackTitleEnabled: true,
    // We need to configure the header options only for the 'tab' screens here
    defaultNavigationOptions: ({navigation}) => {
      const screen = navigation.state.routeName;

      let headerTitle = '';

      let headerLeft = '';

      const headerTintColor = 'white';

      let headerStyle = {
        backgroundColor: '#039CA4',
      };

      const headerTitleStyle = {
        color: '#A8EEEF',
      };

      let headerRight = (
        <TouchableWithoutFeedback>
          <View>
            <NotificationsIndicator />
          </View>
        </TouchableWithoutFeedback>
      );

      if (screen === 'Tab') {
        const {routes, index} = navigation.state;
        const tabScreen = routes[index].routeName;

        // Navigation options for each tab screen with respect to stack navigation
        switch (tabScreen) {
          case 'Book':
            headerTitle = 'Book';
            break;

          case 'Records':
            headerTitle = 'Records';
            break;

          case 'Home':
            headerStyle = {
              backgroundColor: '#F5F9FC',
              height: 240,
            };

            headerTitle = () => (
              <TextInput
                style={{
                  borderWidth: 1,
                  marginTop: 180,
                  marginBottom: 20,
                  borderColor: 'gray',
                  width: '100%',
                  backgroundColor: 'white',
                }}
                placeholder="What do you feel today, Jaravis?"
              />
            );
            headerRight = () => (
              <View style={{marginBottom: 170}}>
                <TouchableWithoutFeedback>
                  <View>
                    <NotificationsIndicator />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            );

            headerLeft = () => (
              <View>
                <Text
                  style={{
                    paddingLeft: 10,
                    fontSize: 20,
                    color: '#6f8191',
                    fontWeight: 'bold',
                  }}>
                  Good Morning, Jaravis{' '}
                </Text>
                <View style={{flexDirection: 'row', maxWidth: '80%'}}>
                  <Text
                    style={{
                      fontSize: 22,
                      flexWrap: 'wrap',
                      paddingLeft: 10,
                      color: '#92A2B1',
                    }}>
                    I am your medical arm and I'm always happy to help
                  </Text>
                </View>
              </View>
            );
            break;

          case 'Appointment':
            headerTitle = 'Appointment';
            break;

          case 'Profile':
            headerTitle = 'Profile';
            break;

          default:
        }

        // return this if tab screen
        return {
          headerStyle,
          headerTitle,
          headerTitleStyle,
          headerRight,
          headerLeft,
          headerTintColor,
        };
      }
      // return this if not tab screen
      return {headerStyle, headerTitleStyle, headerTintColor};
    }, // end of navigationOptions
  },
);

export default MainNavigator;
