let initState = {
  all: [],
  edit: {}
}

export default function tasks(state = initState, action) {

  if (action.type === 'RESOURCES/TASKS/ADD') {
    return {
      ...state,
      all: [ action.payload, ...state.all ]
    };

  } else if (action.type === 'RESOURCES/TASKS/GET') {
    return {
      ...state,
      all: action.payload
    };

   	  // return  action.payload;

  } else if (action.type === 'RESOURCES/TASKS/DELETE') {
      return {
        ...state,
        all: state.all.filter(el => el.id !== action.payload)
      };
  } else if (action.type === 'RESOURCES/TASKS/UPDATE') {

  } else if (action.type === 'RESOURCES/TASKS/GET/ID') {
    return {
      ...state,
      edit: action.payload
    }
  }

  //console.log('STATE', state)

  return state;
}