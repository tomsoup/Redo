import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TodoReducer from './TodoReducer';
import AuthReducer from './AuthReducer';
import AlertReducer from './AlertReducer';


export default combineReducers({
  todos: TodoReducer,
  form: formReducer,
  auth: AuthReducer,
  alerts: AlertReducer
});
