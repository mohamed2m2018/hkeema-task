import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  specialityContainer: {
    flexDirection: 'row',
    maxWidth: '98%',
    flexWrap: 'wrap',
  },
  specialityText: {
    fontSize: 25,
    margin: 10,
    color: '#677987',
  },
  QuestionContainer: {
    backgroundColor: '#F6FBF1',
    padding: 15,
    margin: 10,
  },
  TextAndIconContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  questionText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
  },
  callToActionText: {paddingLeft: 10},
  iconStyling: {paddingLeft: 10},
  keyBoardAvoidingViewStyling:{
    margin: 20
  }
});
