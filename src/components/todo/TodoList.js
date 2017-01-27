import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import { Actions } from 'react-native-router-flux';
import {
  Text, View, ScrollView, ListView, TouchableOpacity, RefreshControl
} from 'react-native';
import TodoItem from './TodoItem.js';
import { addTodo, signOut } from '../../actions';
import AlertContainer from '../alert/AlertContainer';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentWillMount() {
    this.createDataSource(this.props.todos);
 }


  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps.todos);
  }

 onSignOut() {
   this.props.signOut();
 }

 routeAddTodo() {
   Actions.newTodo();
 }

 createDataSource(todos) {
   const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 !== r2
   });

   this.dataSource = ds.cloneWithRows(todos);
 }

 renderRow(todo) {
  return <TodoItem todo={todo} key={todo.id} />;
}


render() {
    const { container, topBar, title, scrollViewContainer } = styles;
    return (
      <View style={container}>

        <View style={topBar}>
          <TouchableOpacity
            onPress={this.onSignOut.bind(this)}
          >
            <Icon name="x" size={20} color="white" />
          </TouchableOpacity>

          <Text style={title}>
            To-Do List
          </Text>
          <TouchableOpacity
            onPress={this.routeAddTodo.bind(this)}
          >
            <Icon name="plus" size={20} color="white" />
          </TouchableOpacity>

        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              onRefresh={this.onRefresh}
              refreshing={this.state.refreshing}
            />
          }
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={scrollViewContainer}
        >
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />

        </ScrollView>
        <View style={{ flex: 1 }}>
          <AlertContainer />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  },

};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.newTodos
  };
};

export default connect(mapStateToProps, { addTodo, signOut })(TodoList);
