/* eslint-disable */
import * as Constants from '../actions';
import { setContext } from './storageUtils';
import request from './request';

const apiMiddleware = ({ dispatch }) => next => async (action) => {
  if (action.type !== Constants.API) {
    next(action);
    return;
  }


  let { url, options, actionType, callback, callbackParams, successParams, noInternetCallback } = action.meta;
  const requestStyle = 'background: #2196f3; color: white;';
  const responseStyle = 'background: #4caf50; color: white;';
  const requestStartTime = new Date().getTime();

  let isLoaderShow = true;
  if (!action.isLoader && action.isLoader === undefined) isLoaderShow = true;
  else if (!action.isLoader) isLoaderShow = false;
  try {
    if (!window.navigator.onLine) {
      dispatch({
        type: Constants.SHOW_SNACKBAR_MESSAGE
        , messageType: 'warning'
        , message: 'Connection lost. Please try again !'
      });
    } else {
      dispatch({ type: Constants.SHOW_LOADER, actionType, url, isShow: isLoaderShow });
      const response = await request(url, options);
      const requestEndTime = new Date().getTime();

      if (response.errorCode === 1100020 || response.errorCode === 1100014) {
        dispatch({ type: Constants.HIDE_LOADER, actionType, url, isShow: isLoaderShow });
        dispatch({ type: Constants.LOGOUT, url, isShow: isLoaderShow });
        // NavigationService.navigate(callbackParams && callbackParams.preLoginVisited ? 'Login' : 'PreLogin');
        return;
      }
      if (response.ErrorNumber) {
        dispatch({ type: Constants.HIDE_LOADER, actionType, url, isShow: isLoaderShow });
        if (response.ErrorNumber === 500 && noInternetCallback) {
          noInternetCallback(response);
        }
        if (response.ErrorNumber === 100) {
          // showToast(strings('common.noInternet'));
        } else {
          // showToast(response.Message || response.statusText || response.message || 'Some error occured');
          // showToast(strings('common.commonError'));
        }
        return;
      }
      if (actionType) {
        dispatch({ type: actionType, payload: response, successParams, isShow: isLoaderShow });
      }
      if (callback) {

        if (action.cleverTap) {
          const actionType = action.cleverTap;
          const request = action.meta.options.data;
          const url = action.meta.options.url;
        }

        callback(response, true, callbackParams);
      }
      dispatch({ type: Constants.HIDE_LOADER, actionType, url, isShow: isLoaderShow });
    }

    dispatch({
      type: ''
      , messageType: ''
      , message: ''
    });

  } catch (error) {

    dispatch({ type: Constants.HIDE_LOADER, actionType, url, isShow: isLoaderShow });
    if (error) {
      // firebase.crashlytics().log(JSON.stringify(error));
      // firebase.crashlytics().setStringValue(`CATCH_API_ERROR-${url}`, JSON.stringify(error));
    }

    if (error.message.toLowerCase() === ('Invalid SessionID provided').toLowerCase()) {
      dispatch({
        type: Constants.SHOW_SNACKBAR_MESSAGE
        , messageType: 'error'
        , message: error.message
      });
      setContext(null);
      localStorage.removeItem('accessToken');
      setTimeout(() => {
        let path = window.location.origin + '/login'
        window.location.href = path;
      }, 100);
    }
    else if (callback) {
      dispatch({
        type: Constants.SHOW_SNACKBAR_MESSAGE
        , messageType: 'error'
        , message: error.message
      });
      callback(error, false);
    }
  }
};

export default apiMiddleware;
