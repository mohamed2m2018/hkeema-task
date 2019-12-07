import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {connect} from 'react-redux';
import * as houseCallActions from '../../store/actions/houseCallActions';
import {Text} from 'native-base';

import {styles} from './HouseCallsScreenStyles';

const HouseCallScreen = ({sendLocation, getPostingLoading}) => {
  const [position, setPosition] = useState({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      setPosition(position);
    });
  }, []);

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  return (
    <View style={styles.container}>
      <MapView
        onPress={e => {
          setPosition({coords: e.nativeEvent.coordinate});

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
        }}
        style={styles.map}
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
        <Text style={styles.waitingForDrApprovalText}>
          Waiting for Doctor's approval...
        </Text>
      </View>
    </View>
  );
};

HouseCallScreen.navigationOptions = {
  headerTitle: 'House Call',
  headerTitleStyle: {
    alignSelf: 'center',
  },
  headerBackTitle: 'home',
};

const mapStateToProps = state => ({
  getServicesLoading: state.calling.getPostingLoading,
});

const mapDispatchToProps = {
  sendLocation: houseCallActions.sendLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseCallScreen);
