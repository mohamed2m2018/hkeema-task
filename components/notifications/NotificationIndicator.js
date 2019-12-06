import React from 'react';
import {View, Text} from 'react-native';

import { Icon } from 'native-base';

const NotificationIndicator = () => (
  <View style={{width: 40}}>
    <Icon
      type="Ionicons"
      name="md-notifications"
      style={{color: '#0A97A3', fontSize: 35}}
    />
  </View>
);

export default NotificationIndicator;
