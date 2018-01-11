npm init -y 							//створює пакет json

npm i -S --save 						//створює пусту папку модулів нод

npm i -S react react-dom  					//установка реакт, створює модулі в папкі нод, ?конектить реакт з хтмл?

npm i -D --save-dev     					//devDependencies in NPM ?do nothing?

npm i -D babel-core babel-loader  				//?Setting up React for ES6 with Webpack and Babel?

	babel-preset-es2015

	babel-preset-react react-hot-loader

	webpack webpack-dev-server

npm i -g webpack webpack-dev-server  				//глобальна установка вебпаку і девсерверу

touch webpack.config.js 					//створює файл в якому будуть налаштування вебпак

--------------------------------------------------------------------------------------------------------------------------------------------------

				!!!		Monster edition		!!!

--------------------------------------------------------------------------------------------------------------------------------------------------
sudo npm install -g create-react-app		 		//установка `реакт

create-react-app todo						//створення програми реакт

npm start							//запуск сервера

npm run build							//переробляє все в 2 файла(js and css) - не використовується

npm install redux --save --save-exact     			//установка redux

npm install react-redux --save --save-exact			//зєднання реакт і редакс


npm install bootstrap@3
	or
npm install --save react react-dom


npm install --save react-bootstrap				//установка бутстрап
<link href=" https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css " rel="stylesheet "/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js "></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js "></script>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<!-- <script src="js/bootstrap.js "></script> -->

npm install axios 											//установка axios

npm install react-router --save  				//установка router

npm install --save redux-thunk					//установка redux-thunk

npm i redux-devtools-extension --save 	//devtools extension

npm install --save react-router-redux		//не обовязково

npm install react-cookie								//установка react cookie

npm install react-cookies --save 				//react-cookies


store тимчасове сховище... 																											//сховище

provider вик для тогоб щоб можна було дістати стор з любої частини проекту...
	передає стор у всі чайлдвові компоненти																				//дає доступ до сховища

actions(запрос на бек-енд) 																											//запит на бекенд

dispatch 																																				//викликає редюсер

reduser(засовує в store дані які прийшли з бeк-енду)														//передає дані бекенд->стор

ref																																				 			//вик для оновлення одного елемента без оновлення всього потоку

------------------------------------------------------------------------------------------------------------------------------

