import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/auth/Login';
import TodoList from './components/todo/TodoList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ backgroundColor: '#f5f5f5' }}>
      <Scene key="auth" initial>
        <Scene key="Login" component={Login} style={{ paddingTop: 65 }} title="Please Login" />
      </Scene>
      <Scene key="list" hideNavBar>
        <Scene
          key="todoList"
          component={TodoList}
          title="Todo List"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
