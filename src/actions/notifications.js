import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from '../components/constants/action_types';


export function addNotificationAsync (params) {
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
