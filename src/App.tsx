import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {Users} from './screens/Users';
import configureStore from './redux/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}
