import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { View, Text } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import AlertContainer from './components/alert/AlertContainer';

  class App extends Component {
    render() {
      let store = createStore(
        reducers,
        {},
        compose(
          applyMiddleware(ReduxThunk),
          autoRehydrate()
      )
    );
      persistStore(store, { storage: AsyncStorage });
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  }


export default App;
