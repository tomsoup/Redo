import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { View, Text } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Main from './components/Main';


  class App extends Component {

    render() {
      const store = createStore(
        reducers,
        {},
        compose(
          autoRehydrate(),
          applyMiddleware(ReduxThunk)
        ),
    );
    persistStore(store, { storage: AsyncStorage });
      return (
        <Provider store={store}>
            <Main />
        </Provider>
      );
    }
  }


export default App;
