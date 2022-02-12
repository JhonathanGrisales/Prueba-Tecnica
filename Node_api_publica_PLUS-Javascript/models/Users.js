//Modelo tabla users

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


const usersSchema = new Schema({


    name: {

        type: String,
        trim: true

    },
    height: {
        type: Number,


    }

})

//Exportar modelo users
module.exports = mongoose.model('Users', usersSchema);
