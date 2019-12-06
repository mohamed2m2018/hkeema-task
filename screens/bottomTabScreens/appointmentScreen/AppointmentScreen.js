import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

const AppointmentScreen = ({
    params,
}) => (
    <View>
        <Text>AppointmentScreen</Text>
    </View>
);

AppointmentScreen.navigationOptions = {
    tabBarLabel: 'Appointment',
    tabBarIcon: ({tintColor}) => (
      <Icon
        type="AntDesign"
        name="clockcircle"
        style={{color: tintColor, fontSize: 28}}
      />
    ),
  };

export default AppointmentScreen;
