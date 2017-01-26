import uuid from 'uuid';
import {
  ADD_ALERT,
  REMOVE_ALERT
} from '../actions/types';

const INITIAL_STATE = {
    alert: []
};
export default (state = INITIAL_STATE, action) => {
    // we can never return empty state
    switch (action.type) {
        case ADD_ALERT:
        return {
          alert: [...state.alert, {
              text: action.payload,
              id: uuid.v4()
            }
          ]
        };
        case REMOVE_ALERT:
          return {
              alert: [...state.alert.filter((alert) => {
                if (alert.id !== action.payload) {
                  return false;
                }
                  return true;
              }
            )]
          };

        default:
            return state;
    }
};
