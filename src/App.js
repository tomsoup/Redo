import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main';
import { configureStore } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}

export default App;
