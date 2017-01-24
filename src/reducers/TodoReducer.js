import uuid from 'uuid';
import {
    ADD_TODO,
    DELETE_TODO
} from '../actions/types';

const INITIAL_STATE = {
    newTodos: []
};
export default (state = INITIAL_STATE, action) => {
    // we can never return empty state
    switch (action.type) {
        case ADD_TODO:

            return {
              newTodos: [...state.newTodos, {
                  text: action.payload,
                  id: uuid.v4()
              }]
            };
        case DELETE_TODO:
            return {
              newTodos: [
                ...state.newTodos.filter((todo) => todo.id !== action.payload)
              ]
            };
        default:
            return state;
    }
};
