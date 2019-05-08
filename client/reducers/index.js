// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import Member from './Member.js';

export default combineReducers({
  Member,
  form: formReducer,
  routing: routerReducer,
});
