import uuid from 'uuid';
import {
    ADD_TODO
} from '../actions/types';

const INITIAL_STATE = {
    // newTodos: []
};
export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    // we can never return empty state
    switch (action.type) {
        case ADD_TODO:
            const newTodos = [...state.todos, {
                text: action.payload,
                id: uuid.v4()
            }];
            return {
                newTodos
            };
        default:
            return state;
    }
};
