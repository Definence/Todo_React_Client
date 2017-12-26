export default function tasks(state = [], action) {

  if (action.type === 'RESOURCES/TASKS/ADD') {
    return [
      ...state,
      action.payload
    ];

  } else if (action.type === 'RESOURCES/TASKS/GET') {
   	  return  action.payload;

  } else if (action.type === 'RESOURCES/TASKS/DELETE') {
  	  state = state.filter(el => el.id !== action.payload);
      //return state;
  }

  return state;
}