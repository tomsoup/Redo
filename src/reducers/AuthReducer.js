import {
    AUTHUSER,
    UNAUTHUSER
} from '../actions/types';

const INITIAL_STATE = {
    userid: undefined,
};
export default (state = INITIAL_STATE, action) => {
    // we can never return empty state
    switch (action.type) {
        case AUTHUSER:
          return {
            userid: action.payload
          };
        case UNAUTHUSER:
            return INITIAL_STATE;
        default:
            return state;
    }
};
