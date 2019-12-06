import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
const ProfileScreen = ({
    params,
}) => (
    <View>
        <Text>ProfileScreen</Text>
    </View>
);

ProfileScreen.navigationOptions = {
    title:'profile',
    tabBarLabel: 'Profile',
    tabBarIcon: ({tintColor}) => (
      <Icon
        type="AntDesign"
        name="stepforward"
        style={{color: tintColor, fontSize: 28}}
      />
    ),
  };

export default ProfileScreen;
