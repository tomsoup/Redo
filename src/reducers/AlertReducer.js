import uuid from 'uuid';
import {
  ADD_ALERT,
  REMOVE_ALERT
} from '../actions/types';

const INITIAL_STATE = {
    alerts: []
};
export default (state = INITIAL_STATE, action) => {
    // we can never return empty state
    switch (action.type) {
        case ADD_ALERT:
        return {
          alerts: [...state.alerts, {
              text: action.payload,
              id: uuid.v4()
            }
          ]
        };
        case REMOVE_ALERT:
          return {
              alerts: [...state.alerts.filter((alert) => alert.id !== action.payload)
            ]
          };


        default:
            return state;
    }
};
