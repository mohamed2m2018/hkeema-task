import React, {useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {styles} from './clinicVisitScreenStyles';
import DefaultButton from '../../components/Button/DefaultButton';
import {Item, Icon, Input, Spinner} from 'native-base';
import {connect} from 'react-redux';
import * as bookingActions from '../../store/actions/bookingActions';

const ClinicVisitScreen = ({
  getCategories,
  serviceCategories,
  getServicesLoading,
}) => {
  useEffect(() => {
    getCategories();
  }, []);

  return !getServicesLoading ? (
    <ScrollView>
      <Text style={styles.specialityText}>Speciality</Text>
      <View style={{flexDirection: 'row', maxWidth: '98%', flexWrap: 'wrap'}}>
        {serviceCategories.map(category => (
          <DefaultButton swapColors key={category.id}>
            {category.name}
          </DefaultButton>
        ))}
      </View>

      <View
        style={{
          backgroundColor: '#F6FBF1',
          padding: 15,
          margin: 10,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            maxWidth: '100%',
            flexWrap: 'wrap',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 14,
              padding: 10,
            }}>
            You don't know the speciality yet?{' '}
          </Text>
          <DefaultButton
            specifiedColor="#009FA7"
            specifiedFontColor="white"
            specifiedFontSize={10}>
            Book Now
          </DefaultButton>
        </View>
        <Text style={{paddingLeft: 10}}>Use online consultation now. </Text>
      </View>

      <Text style={styles.specialityText}>Location</Text>

      <KeyboardAvoidingView style={{margin: 20}}>
        <Item rounded>
          <Icon style={{paddingLeft: 10}} name="ios-search" />
          <Input placeholder="Search" />
        </Item>
      </KeyboardAvoidingView>
    </ScrollView>
  ) : (
    <Spinner />
  );
};
ClinicVisitScreen.navigationOptions = {
  headerTitle: 'Clinic Visit',
  headerTitleStyle: {
    alignSelf: 'center',
  },
  headerBackTitle: 'home',
};

const mapStateToProps = state => ({
  serviceCategories: state.booking.serviceCategories,
  getServicesLoading: state.booking.getServicesLoading,
});

const mapDispatchToProps = {
  getCategories: bookingActions.getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClinicVisitScreen);
