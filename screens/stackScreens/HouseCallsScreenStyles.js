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
  waitingForDrApprovalText: {
    color: '#039CA4',
    paddingTop: 30,
    marginRight: 10,
    fontWeight: 'bold',
  },
  drApprovedText: {color: '#039CA4'},
});
