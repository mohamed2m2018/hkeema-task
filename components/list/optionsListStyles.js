import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardList: {width: '100%'},
  cardListItem: {flexDirection: 'row', justifyContent: 'space-between'},
  cardListItemLeft: {flexDirection: 'row', alignItems: 'center'},
  cardListItemIcon: {
    color: '#29937F',
  
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EBE391',
    marginRight: 10,
  },
  arrowIcon: {
    color: 'gray',
  },
  cardListItemText:{
      fontSize:18,
      fontFamily:'bold',
  }
});

export default styles;
