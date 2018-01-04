let initState = {
  all: [],
  edit: {},
  show: '',
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

  } else if (action.type === 'RESOURCES/TASKS/DELETE') {
      return {
      ...state,
      all: state.all.filter(el => el.id !== action.payload)
    };

  } else if (action.type === 'RESOURCES/TASKS/GET/ID') {
    return {
      ...state,
      edit: action.payload
    };

  } else if (action.type === 'RESOURCES/TASKS/GET/ID/COMPLETE') {
    //виводить масив тасків за мінусом action.payload.id
    state.all = state.all.filter(el => el.id !== action.payload.id);
    return {
      //весь стейт(для того, щоб не пропав едіт)
      ...state,
      //action.payload - той таск, що видозмінювався
      //state.all - масив тасків без видозміненого
      all: [ action.payload, ...state.all ]
    };
  }

  //console.log('STATE', state)

  return state;
}