const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); //Libreria para consumir api publica
const Users = require('../models/Users');




//Función para consultar la api publica.

router.get('/', async (req, res) => {

    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();

    console.log(data);


    //Recorrido del archivo json para validar si es mayor a 100 e ir agregando a la base de datos
    for (let i = 0; i < data.results.length; i++) {

        if (data.results[i].height > 100) {

            const Usuarios = new Users(data.results[i]);
            Usuarios.save();

        }

    }


    //variable que envia datos a la vista 
    const users = await Users.find({}); //Consulta en la BD
    res.render('index', {

        users

    });




});



module.exports = router;


