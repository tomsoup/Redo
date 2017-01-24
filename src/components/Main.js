import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StatusBar, TextInput, ScrollView, ListView } from 'react-native';
import TodoItem from './TodoItem.js';
import { addTodo } from '../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    };
  }


  componentWillMount() {
      this.createDataSource(this.props.todos);
 }


  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps.todos);
  }

  createDataSource(todos) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(todos);
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

  renderRow(todo) {
   return <TodoItem todo={todo} />;
 }

render() {
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
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />

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
  console.log(state.todos.newTodos);
  return {
    todos: state.todos.newTodos
  };
};

export default connect(mapStateToProps, { addTodo })(Main);
