import {
    createStore
} from 'redux';
import reducer from '../reducers';

const defaultState = {
    todos: []
};

exports.configureStore = (initialState = defaultState) => {
    const store = createStore(reducer, initialState);
    return store;
};
