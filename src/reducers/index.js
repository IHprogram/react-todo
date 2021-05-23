import { combineReducers } from 'redux';
import task from './task';
import url from './url';

export default combineReducers({ task, url });