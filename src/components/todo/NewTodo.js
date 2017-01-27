import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import { Actions } from 'react-native-router-flux';
import {
  Text, View, TextInput, ScrollView, TouchableOpacity,
} from 'react-native';
import { addTodo, signOut } from '../../actions';
import AlertContainer from '../alert/AlertContainer';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: '',
      refreshing: false
    };
  }

routeTodoList() {
  Actions.todoList();
}

addNewTodo() {
  const { newTodoText } = this.state;
  if (newTodoText && newTodoText !== '') {
    this.setState({
      newTodoText: ''
    });
    this.props.addTodo(newTodoText);
  }
}


render() {
    const { container, topBar, title, inputContainer, input, scrollViewContainer } = styles;
    return (
      <View style={container}>

        <View style={topBar}>
          <TouchableOpacity
            onPress={this.routeTodoList.bind(this)}
          >
            <Icon name="chevron-left" size={20} color="white" />
          </TouchableOpacity>

          <Text style={title}>
            New To-Do
          </Text>
          <TouchableOpacity
            onPress={this.addNewTodo.bind(this)}
          >
            <Icon name="check" size={20} color="white" />
          </TouchableOpacity>

        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={scrollViewContainer}
        >
        <View style={inputContainer}>
          <TextInput
            style={input}
            onChange={(event) => {
              console.log(event.nativeEvent.text);
              this.setState({
                newTodoText: event.nativeEvent.text
              });
            }}
            returnKeyType="done"
            placeholder='New To Do'
            value={this.state.newTodoText}
            onSubmitEditing={this.addNewTodo.bind(this)}
          />

        </View>
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
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2ecc71'
  },
  input: {
    height: 26
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.newTodos
  };
};

export default connect(mapStateToProps, { addTodo, signOut })(TodoList);
