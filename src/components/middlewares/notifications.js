import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from '../constants/action_types';

export function notificationsAsync (params) {
  if (!params.message) {
    return null;
  }

  return function(dispatch) {
    dispatch({ type: ADD_NOTIFICATION, message: params.message })

    setTimeout(() => {
      dispatch({ type: DELETE_NOTIFICATION });
    }, 3000)
  }
}