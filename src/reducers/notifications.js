import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION
} from '../components/constants/action_types';

export default function notifications(state = { notificationsAsync: [] }, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      const { message } = action;
      return {
        ...state,
        notificationsAsync: [ ...state.notificationsAsync, { message } ]
      }

    case DELETE_NOTIFICATION:
    //ховає перший алерт
      let newNotificationsAsync = state.notificationsAsync.slice(1);
      return {
        ...state,
        notificationsAsync: newNotificationsAsync
      }

    default:
      return state;
  }
}


