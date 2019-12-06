import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'native-base';

const RecordScreen = ({params}) => {
  return (
    <View>
      <Text>RecordScreen</Text>
    </View>
  );
};


RecordScreen.navigationOptions = {
  tabBarLabel: 'Record',

  tabBarIcon: ({tintColor}) => (
    <Icon type="AntDesign" name="heart" style={{color: tintColor}} />
  ),
};
export default RecordScreen;
