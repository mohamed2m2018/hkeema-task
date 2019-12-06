import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'native-base';

const BookScreen = ({params}) => {
  return (
    <View>
      <Text>BookScreen</Text>
    </View>
  );
};



BookScreen.navigationOptions = {
  tabBarLabel: 'Book',
  tabBarIcon: ({tintColor}) => (
    <Icon
      type="Ionicons"
      name="ios-add-circle"
      style={{color: tintColor, fontSize: 28}}
    />
  ),
};

export default BookScreen;