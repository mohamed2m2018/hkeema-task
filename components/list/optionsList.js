import {Icon, Card, CardItem} from 'native-base';
import {Text, View} from 'react-native';
import React from 'react';

import styles from './optionsListStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const OptionsList = props => {
  const {items} = props;

  return (
    <Card style={styles.cardList}>
      {items.map(item => (
        <TouchableOpacity onPress={item.onPress} key={item.title}>
          <View>
            <CardItem style={styles.cardListItem}>
              <View>
                <View style={styles.cardListItemLeft}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name={item.iconName}
                      type={item.iconType}
                      style={styles.cardListItemIcon}
                    />
                  </View>
                  <Text style={styles.cardListItemText}>{item.title}</Text>
                </View>
              </View>
              <Icon name="arrow-forward" style={styles.arrowIcon} />
            </CardItem>
            <Text style={{marginLeft: 75, fontSize: 16, color: 'gray'}}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </Card>
  );
};

export default OptionsList;
