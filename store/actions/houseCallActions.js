import axios from 'axios';
import * as actionTypes from './actionTypes';
import {sendLocationApi, setAuthToken} from '../../utils/httpService';
export const sendLocation = data => dispatch => {
  dispatch({
    type: actionTypes.SEND_LOCATION_START,
  });

  const tokenStr =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEwYjNjYzViZWFmOWVlMDAyNzliNDMwZDQ3MTgwYWNkZDUyZGVjNDdmMGQwNmFkN2EwMjBjNmM0M2Y3NWY3NmU4ZTRhZWM4NmEyMWFkZWQ0In0.eyJhdWQiOiI1IiwianRpIjoiYTBiM2NjNWJlYWY5ZWUwMDI3OWI0MzBkNDcxODBhY2RkNTJkZWM0N2YwZDA2YWQ3YTAyMGM2YzQzZjc1Zjc2ZThlNGFlYzg2YTIxYWRlZDQiLCJpYXQiOjE1NzU3MDU3OTQsIm5iZiI6MTU3NTcwNTc5NCwiZXhwIjoxNTc3MDAxNzk0LCJzdWIiOiI2ODYiLCJzY29wZXMiOltdfQ.adbTeUk9DPYhD_30IbmwIOHnm_rzhrBUNTpy6TxJTsPE9Mk9SyrxZ8oiir9058Xx_P-ao6lrILHZIXA5HkJVU_joaObTVDtpRNKU4lfVBaekuoDoXSGcnrji0m0z416l8s8eF7LiutzSEliMwH2uMdJbPZlISOhUgnBIW6pqJnI8O56TdDYrA5fJmgvPQKogX1myNQqJPn39xMq2mdzdhHa86qd00VhKZQ6pDD_Yx7-KZ0V9_MIWxp18Avf3_RprCoypTzkA-xWFeZbBOyF-6PYAO6874zk0vvgt34IMvy2DsvywBRKPmMxJM-Irpxd_8Q8Rsbex9VQkfZgB5E3o00RmRb8707c0s1QjB8b7thS96pUyXApiHLPFuRTHs_VghyrTE1qE16a0-PR9Ilo4Ke_2-mTlrYSgwP2ceiGlcXcEGFuSUK8FnSbhhwj0hFlk46Ml3Iuj_tIT_NPykwQ-gODYHoRatgGb_gnCJt8JGvtYuLuLkwNiFwYepCAwUMWuHFTJ3lw-zEwOaLw8YVRU-dxCqH5uypC8MqK8KtG9UL_l3TyQHoaPOwgVHXbMdKDcIsfLlUb9WYALu4H_E4BogK7TvmvJ66-F6YliR_jNoYF6lCT4777Hw71LOmM-PQWAYmTnVzApccN1P7XHM_gnbbaTZEVOg_1jCsJYhITGgGo';
  axios
    .post(sendLocationApi, data, {
      headers: {
        Authorization: `Bearer ${tokenStr}`,
        crossdomain: true,
      },
    })
    .then(() => {
      dispatch({
        type: actionTypes.SEND_LOCATION_FINISH,
      });
    })
    .catch(err => {
      console.log('fail');
      console.log(err.response.data);

      dispatch({
        type: actionTypes.SEND_LOCATION_FINISH,
      });
    });
};
