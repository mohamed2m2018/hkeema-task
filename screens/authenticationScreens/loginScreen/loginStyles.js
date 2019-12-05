import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#008388',
    alignItems: 'center',
    paddingTop: 150,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 30,
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '70%',
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    width: '70%',
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
