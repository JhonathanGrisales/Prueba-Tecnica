let users = [];
let count = 0;

//Agregar nuevo usuario 

exports.newUser = (req, res) => {


    users[count] = req.body;
    console.log(users);
    res.json(users);
    count++;


}

//Mostrar usuarios


exports.getUsers = (req, res) => {





    if (users.length != 0) {


        console.log(users);
        //res.json(users);

        res.render('index', {

            users

        });


    } else {


        //res.json({ mensaje: 'Lista vacia' });

        res.render('index', {

            users

        });

        console.log('Lista vacia');
    }


}


//Obtener usuario por ID

exports.getUser = (req, res) => {



    let idsearch = req.params.id; //Captura el id de la peticion 
    let userSearch = [];
    let exis = false;

    if (users.length != 0) {

        //Recorrido por el arreglo para obtener el usuario segun el id de la peticion
        for (let index = 0; index < users.length; index++) {

            if (users[index].id == idsearch) {

                exis = true;
                userSearch = users[index];
                console.log(userSearch);
                res.json(userSearch);


            }

        }

    } else {

        res.json({ mensaje: 'Lista vacia' });
        console.log('Lista vacia');

    }


    if (exis == false) {

        res.json({ mensaje: 'Usuario no encontrado' });
        console.log('Usuario no encontrado');

    }


}


//Actualizar usuario

exports.updateUser = (req, res) => {


    let idsearch = req.params.id; //Captura el id de la peticion 
    let exis = false;


    if (users.length != 0) {

        //Recorrido por el arreglo para obtener el usuario segun el id de la peticion
        for (let index = 0; index < users.length; index++) {

            if (users[index].id == idsearch) {

                exis = true;
                //Al encontrar el id del usuario que se desea actualizar se reemplazan los datos por el body de la peticion.
                users[index] = req.body;

                //res.json({ mensaje: 'Usuario actualizado' });
                console.log('Usuario actualizado');



            }

        }



    } else {

        res.json({ mensaje: 'Lista vacia' });
        console.log('Lista vacia');

    }

    if (exis == false) {

        res.json({ mensaje: 'Usuario no encontrado' });
        console.log('Usuario no encontrado');

    }

}


//Eliminar usuario por id

exports.deleteUser = (req, res,) => {


    let idsearch = req.params.id; //Captura el id de la peticion 
    let userSearch = [];
    let count = 0;


    if (users.length != 0) {

        //Recorrido por el arreglo para obtener el usuario segun el id de la peticion
        for (let index = 0; index < users.length; index++) {

            if (users[index].id != idsearch) {


                userSearch[count] = users[index];
                count++;
            }

        }

        users = userSearch;



        console.log('Usuario Eliminado');
        res.json(users);

    } else {

        res.json({ mensaje: 'Lista vacia' });
        console.log('Lista vacia');

    }


}









