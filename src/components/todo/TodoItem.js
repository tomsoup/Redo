import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';


class TodoItem extends Component {
  deleteSelf() {
    this.props.deleteTodo(this.props.todo.id);
  }


    render() {
      const { text, id } = this.props.todo;
      return (
        <TouchableOpacity onPress={this.deleteSelf.bind(this)}>
          <View style={styles.todoContainer}>
            <Text style={styles.todoText}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
}

const styles = {
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

export default connect(null, { deleteTodo })(TodoItem);
