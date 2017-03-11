import {
  CREATE_THING
} from './actionTypes';

export function addThing(thing) {
  return function (dispatch) {
    dispatch({type: CREATE_THING, thing});
  };

}
