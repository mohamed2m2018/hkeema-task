import React from 'react';
import {Text, View, Image} from 'react-native';
import {Icon} from 'native-base';
const ProfileScreen = ({params}) => (
  <View>
    <Text>ProfileScreen</Text>
  </View>
);

ProfileScreen.navigationOptions = {
  title: 'profile',
  tabBarLabel: 'Profile',
  tabBarIcon: ({tintColor}) => (
    <Image
      source={{uri: 'https://i.ibb.co/ssCDXc3/task-image.jpg'}}
      style={{width: 28, height: 28, borderRadius: 50}}
    />
  ),
};

export default ProfileScreen;
