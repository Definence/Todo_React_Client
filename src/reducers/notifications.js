import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from '../components/constants/action_types';


export default function notifications(state = "", action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return action.payload;
    // case DELETE_NOTIFICATION:
    //   return (null);

    default:
      return state;
  }
}


