import {combineReducers} from 'redux';
import bookingReducer from '../reducers/bookingReducer';
import callingReducer from '../reducers/callingReducer';

export default combineReducers({
  booking: bookingReducer,
  calling: callingReducer,
});
