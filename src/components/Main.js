import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import TodoItem from './TodoItem.js';
import { addTodo } from '../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    };
  }

  addNewTodo() {
    const { newTodoText } = this.state;
    if (newTodoText && newTodoText !== '') {
      this.setState({
        newTodoText: ''
      });
      console.log(this.state);
      this.props.addTodo(newTodoText);
    }
  }


  render() {
    const renderTodos = () => {
      return this.props.todos.map((todo) => {
        return (
          <TodoItem text={todo.text} key={todo.id} id={todo.id} />
        );
      });
    };

    const { container, topBar, title, inputContainer, input } = styles;
    return (
      <View style={container}>
        <View style={topBar}>
          <StatusBar barStyle="light-content" />
        <Text style={title}>
          To-Do List
        </Text>
        </View>
        <View style={inputContainer}>
          <TextInput
            style={input}
            onChange={(event) => {
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
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          {renderTodos()}
        </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },

};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(Main);
