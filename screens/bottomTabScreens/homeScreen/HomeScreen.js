import React from 'react';
import {Text, ScrollView} from 'react-native';
import {Icon} from 'native-base';
import OptionsList from '../../../components/list/optionsList';
import optionsListItems from '../../../components/list/data/optionsListItems';
import {styles} from './homeScreenStyles';

const HomeScreen = ({navigation}) => (
  <ScrollView>
    <Text style={styles.QuestionText}>WHAT CAN I DO FOR YOU?</Text>

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
