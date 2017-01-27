import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import Alert from './Alert';

class AlertContainer extends Component {

  componentWillMount() {
      this.createDataSource(this.props.alerts);
 }


  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps.alerts);
  }


  createDataSource(alerts) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(alerts);
  }

  renderRow(alert) {
   return <Alert alert={alert} key={alert.id} />;
 }

  render() {
    return (

      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts.alerts
  };
};

export default connect(mapStateToProps)(AlertContainer);
