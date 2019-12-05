import React, { Component ,useState,useEffect} from 'react';
import MainNavigator from './routes/MainNavigator';
import {createAppContainer} from 'react-navigation';
const App = createAppContainer(MainNavigator);



export default class HelloWorldApp extends Component {
  render() {
    return (
      <App/>
    );
  }
}
