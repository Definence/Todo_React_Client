let URL;

process.env.NODE_ENV !== 'production' ?
  URL = 'http://localhost:3000';
:
  URL = 'https://todo-react-api.herokuapp.com/'

export const SESSION_URL = URL + '/sessions'

export const USERS_URL = URL + '/users'

export const TASKS_URL = URL + '/tasks'

export const HEADERS = new Headers({ 'Content-Type': 'application/json'})

export const token = localStorage.getItem('token')

export const username = localStorage.getItem('username')