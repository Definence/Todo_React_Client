let initState = {
  items: [],
  item: {},
}

export default function tasks(state = initState, action) {

  if (action.type === 'RESOURCES/TASKS/ADD') {
    return {
      ...state,
      items: [ action.payload, ...state.items ]
    };

  } else if (action.type === 'RESOURCES/TASKS/GET') {
    return {
      ...state,
      items: action.payload
    };

  } else if (action.type === 'RESOURCES/TASKS/DELETE') {
      return {
      ...state,
      items: state.items.filter(el => el.id !== action.payload)
    };

  } else if (action.type === 'RESOURCES/TASKS/GET/ID') {
    return {
      ...state,
      item: action.payload
    };

  } else if (action.type === 'RESOURCES/TASKS/GET/ID/COMPLETE') {
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

  //console.log('STATE', state)

  return state;
}