import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './data/store';
import {Root} from './nav/Root';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export {App};
