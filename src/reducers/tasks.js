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

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        items: [ action.payload, ...state.items ]
      };

    case GET_TASKS:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_TASK:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
      };

    case GET_TASK_ID:
      return {
        ...state,
        item: action.payload
      };

    case COMPLETE_TASK:
      //виводить масив тасків за мінусом action.payload.id
      state.items = state.items.filter(el => el.id !== action.payload.id);
      return {
        //весь стейт(для того, щоб не пропав едіт)
        ...state,
        //action.payload - той таск, що видозмінювався
        //state.items - масив тасків без видозміненого
        items: [ action.payload, ...state.items ]
      };

    // case SORT_TASKS:
    //   console.log(action.payload)
    //   return state

    default:
      return state;
  }
}