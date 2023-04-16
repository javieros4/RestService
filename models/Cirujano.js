const { Schema, model } = require("mongoose");
const TipoContacto = mongoose.model('Persona');

const CirujanoSchema = Schema({
    persona:{
        type:Schema.ObjectId, 
        ref:'Persona',
        require:[true,'Los datos personales son necesarios']        
    },
    especialidad:{
        type:String,
        require:[true,'La especialidad es requerida']        
    } 
});

module.exports = model('Cirujano',CirujanoSchema);