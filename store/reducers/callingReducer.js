import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  getPostingLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEND_LOCATION_START:
      return {
        ...state,
        getPostingLoading: true,
      };

    case actionTypes.SEND_LOCATION_FINISH:
      return {
        ...state,
        getPostingLoading: false,
      };

    default:
      return state;
  }
};
