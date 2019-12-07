import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {connect} from 'react-redux';
import * as houseCallActions from '../../store/actions/houseCallActions';
import {Text, Spinner} from 'native-base';

import {styles} from './HouseCallsScreenStyles';

const HouseCallScreen = ({sendLocation, getPostingLoading, navigation}) => {
  const [position, setPosition] = useState({
    coords: {longitude: 31.347031742334366, latitude: 30.05967507607752},
  });

  const [requestCancelled, setRequestCancelled] = useState(false);

  const cancelRequest = () => {
    setRequestCancelled(true);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      //setting the user's position as the position to appear on the map
      setPosition(position);
      //sending the user's position
      sendLocation({
        s_latitude: position.coords.latitude,
        d_latitude: '0.0922',
        s_longitude: position.coords.longitude,
        d_longitude: '0.0421',
        s_gender: 'Any',
        s_hours: '1',
        service_type: '1',
        distance: '1',
        payment_mode: 'CASH',
      });
    });

    navigation.setParams({cancelRequest});
  }, []);

  const {latitude} = position.coords;
  const {longitude} = position.coords;

  const onMapPress = e => {
    {
      //set new pressed position by the user
      setPosition({coords: e.nativeEvent.coordinate});
      //send new pressed position by the user
      sendLocation({
        s_latitude: e.nativeEvent.coordinate.latitude,
        d_latitude: '0.0922',
        s_longitude: e.nativeEvent.coordinate.longitude,
        d_longitude: '0.0421',
        s_gender: 'Any',
        s_hours: '1',
        service_type: '1',
        distance: '1',
        payment_mode: 'CASH',
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={onMapPress}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}></Marker>
      </MapView>
      <View style={styles.waitingForDrApprovalContainer}>
        {getPostingLoading && !requestCancelled ? (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.waitingForDrApprovalText}>
              Waiting for Doctor's approval...
            </Text>
            <Spinner style={{alignSelf: 'flex-end'}} size="small"></Spinner>
          </View>
        ) : requestCancelled ? (
          <Text style={styles.drApprovedText}>You cancelled request</Text>
        ) : (
          <Text style={styles.drApprovedText}>Dr approved your Request</Text>
        )}
      </View>
    </View>
  );
};

HouseCallScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'House Call',
    headerTitleStyle: {
      alignSelf: 'center',
    },
    headerBackTitle: 'home',

    headerRight: () => {
      return (
        <TouchableOpacity onPress={navigation.getParam('cancelRequest')}>
          <Text style={{color: 'white', marginRight: 10}}>Cancel</Text>
        </TouchableOpacity>
      );
    },
  };
};

const mapStateToProps = state => ({
  getPostingLoading: state.calling.getPostingLoading,
});

const mapDispatchToProps = {
  sendLocation: houseCallActions.sendLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseCallScreen);
