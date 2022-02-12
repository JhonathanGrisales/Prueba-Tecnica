//Importar express 
const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');



module.exports = function () {


    //Agregar usuarios
    router.post('/users', userController.newUser);


    //Obtener usuarios
    router.get('/users', userController.getUsers);


    //Obtener usuario por ID
    router.get('/users/:id', userController.getUser);


    
    //Actualizar usuario
    router.put('/users/:id', userController.updateUser);


    

    //Eliminar usuario por id

    router.delete('/users/:id', userController.deleteUser);


    return router

}