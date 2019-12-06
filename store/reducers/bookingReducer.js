import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE={
    serviceCategories:[],
    getServicesLoading:false
}


export default (state=INITIAL_STATE,action)=>{


    switch(action.type){
        // case actionTypes.GET_CATEGORIES_START:
        //     return {
        //       ...state,
        //       getServicesLoading: true,
        //     };
      
        case actionTypes.GET_CATEGORIES_FINISH:
             return {
                  ...state,
                  getServicesLoading: false,
                  serviceCategories:action.payload,
                };


        default:return state;        
          
    }

}
