/* eslint-disable */
import { combineReducers } from 'redux';
import snackbarMessageReducer from './snackbarMessageReducer';
import { twitterReducer } from './twitterReducer';

export default combineReducers({
    snackbarMessage: snackbarMessageReducer,
    twitter: twitterReducer,
});
