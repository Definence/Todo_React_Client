------------------------------------------------------------------------------------------------------------------------------

Проект:

>   https://todo-react-client.herokuapp.com/

------------------------------------------------------------------------------------------------------------------------------

    Commands:

------------------------------------------------------------------------------------------------------------------------------

установка пакету генерації проекту реакт

>  sudo npm install -g create-react-app


генерація проекту

>  create-react-app todo


установка npm

>  npm install


запуск сервера

>  npm start


переробляє все в 2 файла(js and css) - не використовується

>  npm run build


установка redux

>  npm install redux --save --save-exact


зєднання реакт і редакс

>  npm install react-redux --save --save-exact


react dom

>  npm install --save react react-dom


установка бутстрап

>  npm install bootstrap@3

 or

>  npm install --save react-bootstrap


CDN bootstrap

  <link href=" https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css " rel="stylesheet "/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js "></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js "></script>
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <!-- <script src="js/bootstrap.js "></script> -->


установка axios

>  npm install axios


установка router

>  npm install react-router --save

>  npm install --save react-router-redux


установка redux-thunk

>  npm install --save redux-thunk


devtools extension(не обовязково)

>  npm i redux-devtools-extension --save


установка react cookie

>  npm install react-cookie

>  npm install react-cookies --save


prop-types(не обовязково)

>   npm install --save prop-types

for using:

>   import PropTypes from 'prop-types';

------------------------------------------------------------------------------------------------------------------------------

    Promises(not completed):

------------------------------------------------------------------------------------------------------------------------------

інсталяція промісів

>  npm i react-promise


export function getTask(id) {
  return function(dispatch, getState) {
    return new Promise((resolve, reject) => {
      axios.get(`${TASKS_URL}/${id}`, { headers: headers })
        .then(res => {
          resolve(res);
          dispatch({ type: GET_TASK_ID, payload: res.data });
        })
        .catch(e => {
          reject(e);
          console.error("error: ", e);
        })
    })
  }
}


this.context.store.dispatch(getTask(id))
  .then(response => {
    this.setState({task: response.data});
  })

------------------------------------------------------------------------------------------------------------------------------

    Терміни:

------------------------------------------------------------------------------------------------------------------------------

store  -  тимчасове сховище інформації. коли стор змінюється - компонент перерендурується

provider  -  вик для тогоб щоб можна було дістати стор з любої частини проекту... передає стор у всі чайлдвові компоненти

actions(запрос на бек-енд)  -  запит на бекенд

dispatch  -  викликає редюсер

reduсer  -  змінює стор

ref  -  взвертається до конкретного дом елемента. вик для оновлення одного елемента без оновлення всього потоку. можна вик
для отримання інпуту без перерендерінга

subscribe  -  підписується на зміну стор. робить код кожен раз, коли змінюється стор

connect  -  підключення реакт компонент до редакс стор

state  -  стан компонента. коли він змінюється - компонент перерендериться

middleware  -  якийсь код, що виконується між екшеном та редюсером

props  -  свойста комонента. можна передати дані зі стор в пропси для подальшого використання. передають свойства з парентового
компонента до чайлдового

connect  -  передає дані зі стора в пропси

context   -   механізм передачі свойств зверху вниз всім дочірнім елементам

bind(this)   -   використовують для виклику функції в контесті класу

------------------------------------------------------------------------------------------------------------------------------