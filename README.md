------------------------------------------------------------------------------------------------------------------------------

				Commands

------------------------------------------------------------------------------------------------------------------------------


установка реакт

>		sudo npm install -g create-react-app


створення програми реакт

>		create-react-app todo


установка npm

>		npm install


запуск сервера

>		npm start


переробляє все в 2 файла(js and css) - не використовується

>		npm run build


установка redux

>		npm install redux --save --save-exact


зєднання реакт і редакс

>		npm install react-redux --save --save-exact


react dom

>		npm install --save react react-dom


установка бутстрап

>		npm install bootstrap@3

	or

>		npm install --save react-bootstrap


CDN bootstrap

		<link href=" https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css " rel="stylesheet "/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js "></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js "></script>
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<!-- <script src="js/bootstrap.js "></script> -->


установка axios

>		npm install axios


установка router

>		npm install react-router --save

>		npm install --save react-router-redux


установка redux-thunk

>		npm install --save redux-thunk


devtools extension

>		npm i redux-devtools-extension --save


установка react cookie

>		npm install react-cookie

>		npm install react-cookies --save


react promise

>		npm i react-promise


------------------------------------------------------------------------------------------------------------------------------

				Терміни:

------------------------------------------------------------------------------------------------------------------------------


store тимчасове сховище... 																											//сховище

provider вик для тогоб щоб можна було дістати стор з любої частини проекту...
	передає стор у всі чайлдвові компоненти																				//дає доступ до сховища

actions(запрос на бек-енд) 																											//запит на бекенд

dispatch 																																				//викликає редюсер

reduser(засовує в store дані які прийшли з бeк-енду)														//передає дані бекенд->стор

ref																																				 			//вик для оновлення одного елемента без оновлення всього потоку
------------------------------------------------------------------------------------------------------------------------------