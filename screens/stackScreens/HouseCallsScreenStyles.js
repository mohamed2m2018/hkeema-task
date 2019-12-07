import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {height: '100%'},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  waitingForDrApprovalContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#FEFAE5',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  waitingForDrApprovalText: {color: '#039CA4'},
});
