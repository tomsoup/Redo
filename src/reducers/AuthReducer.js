import {
    SIGN_IN,
    SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
    userid: undefined,
};
export default (state = INITIAL_STATE, action) => {
    // we can never return empty state
    switch (action.type) {
        case SIGN_IN:
          return {
            userid: action.payload
          };
        case SIGN_OUT:
          return {
              INITIAL_STATE
          };
        default:
            return state;
    }
};
