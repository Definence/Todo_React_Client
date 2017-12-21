export default function tasks(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'RESOURCES/TASKS/GET') {
    return  action.payload;
  }
  return state;
}