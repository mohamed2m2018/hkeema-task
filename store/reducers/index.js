import {combineReducers} from 'redux';
import bookingReducer from '../reducers/bookingReducer';

export default combineReducers({
  booking: bookingReducer,
});
