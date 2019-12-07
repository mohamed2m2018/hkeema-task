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
      <View style={styles.specialityContainer}>
        {serviceCategories.map(category => (
          <DefaultButton swapColors key={category.id}>
            {category.name}
          </DefaultButton>
        ))}
      </View>

      <View style={styles.QuestionContainer}>
        <View style={styles.TextAndIconContainer}>
          <Text style={styles.questionText}>
            You don't know the speciality yet?{' '}
          </Text>
          <DefaultButton
            specifiedColor="#009FA7"
            specifiedFontColor="white"
            specifiedFontSize={10}>
            Book Now
          </DefaultButton>
        </View>
        <Text style={styles.callToActionText}>
          Use online consultation now.{' '}
        </Text>
      </View>

      <Text style={styles.specialityText}>Location</Text>

      <KeyboardAvoidingView style={styles.keyBoardAvoidingViewStyling}>
        <Item rounded>
          <Icon style={style.iconStyling} name="ios-search" />
          <Input placeholder="Search" />
        </Item>
      </KeyboardAvoidingView>

      <DefaultButton
        style={{margin: 17}}
        specifiedColor="#009FA7"
        specifiedFontColor="white"
        big>
        Show Results ( 32 )
      </DefaultButton>
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
