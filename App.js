import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/createStore';
import MainNavigator from './routes/MainNavigator';
import {createAppContainer} from 'react-navigation';
const App = createAppContainer(MainNavigator);

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
