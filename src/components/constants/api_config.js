// import { token } from '../components/constants/api_config';


const URL = 'http://localhost:3000'

export const USERS_URL = URL + '/users'

export const TASKS_URL = URL + '/tasks'

export const HEADERS = new Headers({ 'Content-Type': 'application/json'})

export const token = localStorage.getItem('token')

export const username = localStorage.getItem('username')

