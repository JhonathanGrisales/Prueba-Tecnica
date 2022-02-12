const express = require('express'); //Importar express 
const { mongo } = require('mongoose');
const routes = require('./routes'); //Importar carpeta routes
const mongoose = require('mongoose'); //Importar mongoose
const bodyParser = require('body-parser'); //Libreria para acceder al body de las peticiones 
const path = require('path');//Libreria para leer los archivos que existen en las carpetas
const Users = require('./models/Users');


//Conexion con BD Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/api', {

    useNewUrlParser: true

});


//Crear la app
const app = express();

//Habilitar pug
app.set('view engine', 'pug');

//carpeta de vistas 
app.set('views', path.join(__dirname, './views'));


//Middleware verificar rol

app.get('/users/:id', async function (req, res, next) {


    const user = await Users.findById(req.params.id);
    
    if (!user) {

        res.json({ mensaje: 'Usuario no existe' });
        next()

    } else if (user.userType == 'admin') {

        console.log('El usuario puede modificar y agregar usuarios')
        next()


    } else {

        console.log('El usuario no puede modificar ni agregar usuarios')
        next()
    }



});



//habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas de la app
app.use('/', routes());


//Configurar puerto
app.listen(8000);

