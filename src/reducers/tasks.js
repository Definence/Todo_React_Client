import {
  GET_TASKS,
  GET_TASK_ID,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK
} from '../components/constants/action_types';

let initState = {
  items: [],
  item: {},
}

export default function tasks(state = initState, action) {

  if (action.type === ADD_TASK) {
    return {
      ...state,
      items: [ action.payload, ...state.items ]
    };

  } else if (action.type === GET_TASKS) {
    return {
      ...state,
      items: action.payload
    };

  } else if (action.type === DELETE_TASK) {
      return {
      ...state,
      items: state.items.filter(el => el.id !== action.payload)
    };

  } else if (action.type === GET_TASK_ID) {
    return {
      ...state,
      item: action.payload
    };

  } else if (action.type === COMPLETE_TASK) {
    //виводить масив тасків за мінусом action.payload.id
    state.items = state.items.filter(el => el.id !== action.payload.id);
    return {
      //весь стейт(для того, щоб не пропав едіт)
      ...state,
      //action.payload - той таск, що видозмінювався
      //state.items - масив тасків без видозміненого
      items: [ action.payload, ...state.items ]
    };
  }

  return state;
}