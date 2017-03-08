import {
  CREATE_THING
} from '../actions/actionTypes';

export default function questionReducer(state = [], action) {
  switch (action.type) {
    case CREATE_THING:
      return [...state, Object.assign({}, action.thing)];

    default:
      return state;
  }
}
