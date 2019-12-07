import React from 'react';
import {Text, ScrollView} from 'react-native';
import {Icon} from 'native-base';
import OptionsList from '../../../components/list/optionsList';
import optionsListItems from '../../../components/list/data/optionsListItems';

const HomeScreen = ({navigation}) => (
  <ScrollView>
    <Text
      style={{
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        color: '#4FB7B3',
        paddingLeft: 10,
        fontWeight: 'bold',
      }}>
      WHAT CAN I DO FOR YOU?
    </Text>

    {/* List */}
    <OptionsList items={optionsListItems(navigation)} />
  </ScrollView>
);

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => (
    <Icon
      type="Ionicons"
      name="ios-home"
      style={{color: tintColor, fontSize: 28}}
    />
  ),
};
export default HomeScreen;
