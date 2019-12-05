import {createStore,compose,applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'; 

const middleWare=[thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  
  export default store;