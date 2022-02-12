//Importando modelo de users
const { render } = require('express/lib/response');
const Users = require('../models/Users');



//Agregar nuevo usuario 

exports.newUser = async (req, res, next) => {

    const user = new Users(req.body);

    try {

        // Guaradar el registro
        await user.save();
        res.json({ mensaje: 'Se agrego un nuevo usuario' });


    } catch (error) {

        //Su hay errores saca mensaje y continua

        console.log(error);
        next();


    }


}

//Mostrar usuarios

exports.getUsers = async (req, res, next) => {


    try {

        const users = await Users.find({});
        //res.json(users);


        res.render('index', {

            users

        });

    } catch (error) {


        console.log(error);
        next();
    }


}

//Obtener usuario por ID

exports.getUser = async (req, res, next) => {

    const user = await Users.findById(req.params.id);

    if (!user) {

        res.json({ mensaje: 'Usuario no existe' });
        next()
    }

    res.send(user);


}


//Actualizar usuario

exports.updateUser = async (req, res, next) => {

    try {

        const users = await Users.findByIdAndUpdate({ _id: req.params.id },

            req.body, {

            new: true //Trae el nuevo valor despues de actualizado

        });

        res.json({ mensaje: 'Se actualizo usuario' });


    } catch (error) {


        console.log(error);
        next();
    }

}

//Eliminar usuario por id

exports.deleteUser = async (req, res, next) => {

    try {

        await Users.findOneAndDelete({ _id: req.params.id });
        res.json({ mensaje: 'Usuario eliminado' });

    } catch (error) {

        console.log(error);
        next();

    }


}




