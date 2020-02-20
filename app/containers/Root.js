// @flow
import React from 'react';
import Routes from '../routes';
import { Provider } from 'react-redux';
import store from '../store/index'


export default function Root() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}
