export default function tasks(state = [], action) {
  if (action.type == 'RESOURCES/TASKS/ADD') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type == 'RESOURCES/TASKS/GET') {
    return  action.payload;
  }
  return state;
}