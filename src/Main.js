import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import TodoList from './components/todo/TodoList';
import Login from './components/auth/Login';

class Main extends Component {

  render() {
    console.log(this.props.user_id);
    if (this.props.user_id) {
      return (
        <TodoList />
      );
    }
    return (
      <Login />  
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user_id: state.auth.userid
  };
};


export default connect(mapStateToProps)(Main);
