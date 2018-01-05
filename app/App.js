/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Home from './src/Home/Home';
import NavigationStack from './config/router';

export default class App extends Component {
  render() {
    return (
      <NavigationStack/>
    );
  }
}
