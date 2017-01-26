import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import TodoList from './components/todo/TodoList';
import Login from './components/auth/Login';
import AlertContainer from './components/alert/AlertContainer';


class Main extends Component {

  render() {
    const renderMainView = () => {
    if (this.props.user_id) {
      return (
        <TodoList />
      );
    }
      return (
        <Login />
      );
  };
  return (
    <View style={{ flex: 1 }}>
      {renderMainView()}
      <AlertContainer />
    </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.userid
  };
};


export default connect(mapStateToProps)(Main);
