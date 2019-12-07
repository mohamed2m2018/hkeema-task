import axios from 'axios';
import * as actionTypes from './actionTypes';
import {serviceCategoriesAPi} from '../../utils/httpService';
export const getCategories = callBack => dispatch => {
  dispatch({
    type: actionTypes.GET_CATEGORIES_START,
  });

  axios
    .get(serviceCategoriesAPi)
    .then(response => {
      dispatch({
        type: actionTypes.GET_CATEGORIES_FINISH,
        payload: response.data,
      });
      if (callBack) callBack();
    })
    .catch(err => {
      dispatch({
        type: actionTypes.GET_CURRENT_PROFILE_FINISH,
      });
    });
};
