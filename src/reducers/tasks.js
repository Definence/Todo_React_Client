export default function tasks(state = [], action) {

  if (action.type === 'RESOURCES/TASKS/ADD') {
    return [
      ...state,
      action.payload
    ];

  } else if (action.type === 'RESOURCES/TASKS/GET') {
   	  return  action.payload;

  } else if (action.type === 'RESOURCES/TASKS/DELETE') {
  		state.tasks = state.tasks.filter(el => el.id !== action.payload);
      return ({
        ...state,
        tasks: [...state.tasks]
      });
  }

  return state;
}