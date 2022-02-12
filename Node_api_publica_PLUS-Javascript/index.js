const express = require ('express'); //Importar express 
const routes = require('./routes'); //Importar rutas
const mongoose = require('mongoose'); //Imporar mongodb
const bodyParser = require ('body-parser'); //Libreria para parsear los arechivos json
const path = require('path'); //Libreria para acceder a los archivos locales


//conectar a mongo

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiPublica' ,{

useNewUrlParser : true

});


//Crera el servidor
const app = express()


//Habilitar pug 
app.set('view engine', 'pug');

//carpeta de vistas 
app.set('views', path.join(__dirname, './views'));

//Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Rutas de la app
app.use('/', routes());
app.use('/users', require('./routes/users'));


//puerto
app.listen(5000);


