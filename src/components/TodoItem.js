import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TodoItem extends Component {
    render() {
      return (
        <View style={styles.todoContainer}>
          <Text style={styles.todoText}>
            {this.props.text}
          </Text>
        </View>
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
export default TodoItem;
