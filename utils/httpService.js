import axios from 'axios';


export const setAuthToken = (token) => {
    if (token) {
      // Apply to every request
      axios.defaults.headers.common.Authorization = token;
    }
  };

  export const removeAuthToken = () => {
    // Delete auth header
    delete axios.defaults.headers.common.Authorization;
  };
  

export const signUpApi="http://46.101.108.156/api/user/signup";
export const tokenApi="http://46.101.108.156/oauth/token";
export const serviceCategoriesAPi="http://46.101.108.156/service_cats";


