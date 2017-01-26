import * as Keychain from 'react-native-keychain';
import axios from 'axios';
import {
  UNAUTHUSER,
  AUTHUSER
} from './types';
import { SIGNUP_URL, SIGNIN_URL } from '../api';
import { addAlert } from './AlertActions';

export const loginUser = (email, password) => {
  console.log(email, password);
  return (dispatch) => {
    // axios.post is a function that takes time to complete.
    // we call .then on the return value
    // which takes a function to be completed when axios.post is finished
    // axios.post returns a promise and promises have a method called then
    // which takes a callback when the promises is fulfilled
    return axios.post(SIGNIN_URL, { email, password }).then((response) => {
      // from backend
      const { user_id, token } = response.data;
        console.log(user_id, token);
      Keychain.setGenericPassword(user_id, token)
        .then(() => {
          dispatch(addAlert(token));
          dispatch(authUser(user_id));
        });
      //.catch takes a function to be executed when exception/errors during an request
      // error handling callback
    }).catch((error) => {
      console.log(error);
      dispatch(addAlert('Could not log in.'));
    });
  };
};


export const signupUser = (email, password) => {
  return (dispatch) => {
    return axios.post(SIGNUP_URL, { email, password }).then((response) => {
      // from backend
      const { user_id, token } = response.data;
      Keychain.setGenericPassword(user_id, token)
        .then(() => {
          dispatch(addAlert(token));
          dispatch(authUser(user_id));
        });
    }).catch((error) => {
      dispatch(addAlert('Could not Sign Up.'));
    });
  };
};

const authUser = (userId) => {
  return {
    type: AUTHUSER,
    payload: userId
  };
};

export const signOut = (userId) => {
  return {
    type: UNAUTHUSER,
    payload: userId
  };
};
