import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { reduxForm } from 'redux-form';
import { loginUser, signupUser } from '../../actions';
import AlertContainer from '../alert/AlertContainer';

const FORM_FIELDS = {
    email: {
        type: 'input',
        label: 'Title for Post',
    },
    password: {
        type: 'input',
        label: 'Enter some categories for this post',
    }
};


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    // AsyncStorage.clear();
    console.log(this.props.user_id);
    if (this.props.user_id) {
      return (
        Actions.list()
      );
    }
  }


  onSignIn() {
    const { dispatch, fields: { email, password } } = this.props;
    this.setState({
      loading: true
    });
    dispatch(loginUser(email.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  }

  onSignUp() {
    const { dispatch, fields: { email, password } } = this.props;
    this.setState({
      loading: true
    });
    dispatch(signupUser(email.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  }

  componentWillUpdate(nextProps) {
    console.log(nextProps.user_id);
      if (nextProps.user_id) {
        return (
          Actions.list()
        );
      }
    }

  renderField(fieldConfig, field) {
      const fieldHelper = this.props.fields[field];
      return (
        <View key={field}>
          <View style={styles.textField}>
            <TextInput
              key={field}
              {...fieldHelper}
              placeholder={field}
              style={styles.input}
            />

          </View>
          <View>
            <Text
              style={styles.formError}
            >
              {fieldHelper.touched
                  ? fieldHelper.error
                  : ''}
            </Text>
          </View>
        </View>
      );
    }

  render() {
    const { container, titleContainer, title, buttonContainer, button } = styles;
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Loading... </Text>
        </View>
      );
    }
    return (
      <View style={container}>
        { _.map(FORM_FIELDS,
          this.renderField.bind(this))
        }
        <View style={buttonContainer}>
          <TouchableOpacity
            onPress={this.onSignIn.bind(this)}
          >
            <Text style={button}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onSignUp.bind(this)}
          >
            <Text style={button}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <AlertContainer />
        </View>
      </View>

    );
  }
}

// https://coolors.co/f9bb3e-295793-e8e8e8-39393a-ffffff

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#39393A',
    paddingTop: 20,
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: '#e8e8e8',
    fontSize: 22,
  },
  textField: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: '#ffffff'
  },
  input: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    fontSize: 18,
    color: '#e8e8e8'
  },
  formError: {
    color: 'red',
    paddingLeft: 8,
  }

};


const validate = (values) => {
    const errors = {};
    _.each(FORM_FIELDS, (type, field) => {
      if (!values[field]) {
        errors[field] = `Enter a ${field}`;
      }
    });
  return errors;
};

const mapStateToProps = (state) => {
  console.log(state.auth.userid);
  return {
    user_id: state.auth.userid
  };
};

export default reduxForm({
  form: 'login',
  fields: _.keys(FORM_FIELDS),
  validate,
}, mapStateToProps, null)(Login);
