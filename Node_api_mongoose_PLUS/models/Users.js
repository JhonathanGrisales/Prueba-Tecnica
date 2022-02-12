const mongoose = require('mongoose'); //Importar mongoose
const Schema = mongoose.Schema;




//Creando modelo de la tabla users

const usersSchema = new Schema({

    name: {

        type: String,
        trim: true,
        required: true
    },


    lastName: {

        type: String,
        trim: true

    },

    userType: {


        type: String,
        trim: true,
        required: true,
        lowercase: true

    }


})


//Exportando modelo
module.exports = mongoose.model('Users', usersSchema);

