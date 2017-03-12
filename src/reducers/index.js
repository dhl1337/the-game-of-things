import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import things from './thingReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  form,
  things,
  auth: authReducer
});

export default rootReducer;
