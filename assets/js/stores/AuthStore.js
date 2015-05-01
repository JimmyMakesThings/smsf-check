import Immutable from 'immutable';

import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import locals from '../utils/locals';

let signingIn, signingOut;
let currentUser = Immutable.fromJS(locals.user);
let error;

const AuthStore = createStore({
  signingIn() {
    return signingIn;
  },

  signedIn(email) {
    if (!email) {
      return !!currentUser;
    } else {
      return currentUser && currentUser.get('email') === email;
    }
  },

  signingOut() {
    return signingOut;
  },

  getUser() {
    return currentUser;
  },

  getError() {
    return error;
  },
});

AuthStore.dispatchToken = AppDispatcher.register((payload) => {
  const { action } = payload;
  const { response, err } = action;

  const user = response && response.user;

  switch (action.type) {
    case ActionTypes.SIGNIN:
      signingIn = true;
      error = void 0;
      break;

    case ActionTypes.SIGNIN_SUCCESS:
      signingIn = false;
      currentUser = Immutable.fromJS(user);
      error = void 0;
      break;

    case ActionTypes.SIGNIN_ERROR:
      signingIn = false;
      error = err;
      break;

    case ActionTypes.CLEAR_SIGNIN_ERROR:
      error = void 0;
      break;

    case ActionTypes.SIGNOUT:
      signingOut = true;
      break;

    case ActionTypes.SIGNOUT_SUCCESS:
      signingOut = false;
      currentUser = void 0;
      break;

    case ActionTypes.SIGNOUT_ERROR:
      signingOut = false;
      break;

    default:
      return;
  }

  AuthStore.emitChange();
});

export default AuthStore;
