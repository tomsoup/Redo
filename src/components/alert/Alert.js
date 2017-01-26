import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { removeAlert } from '../../actions';

class Alert extends Component {

  onRemoveAlert() {
    const { dispatch, alert } = this.props;
    dispatch(removeAlert(alert.id));
  }

  render() {
    const { container, text } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onRemoveAlert.bind(this)}>
        <View style={container}>
          <Text style={text}>
            {this.props.alert.id}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFF275',
    borderColor: '#F9BB3E',
    // 5ef38c
    borderTopWidth: 2
  },
  text: {
    color: '#FF3C38'
  }
};

export default connect()(Alert);
