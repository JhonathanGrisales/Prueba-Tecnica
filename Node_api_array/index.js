const express = require('express'); //Importar express 
const routes = require('./routes'); //Importar carpeta routes
const bodyParser = require ('body-parser'); //Libreria para acceder al body de las peticiones 
const path = require('path');



//Crear la app
const app = express()

//Habilitar pug 
app.set('view engine', 'pug');

//carpeta de vistas 
app.set('views', path.join(__dirname, './views'));



//habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Rutas de la app
app.use('/', routes());


//Configurar puerto
app.listen(8000);

