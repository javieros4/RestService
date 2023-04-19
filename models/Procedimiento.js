const { Schema, model } = require('mongoose');

const ProcedimientoSchema = Schema({
    descripcion:{
        type:String, 
    },  
    monto:{
        type:Number, 
    },  
    duracion:{
        type:Number, 
    },  
    fecha:{
        type:Date, 
    },  
    cirujano:{
        type:Schema.ObjectId, 
        ref:'Cirujano',
        require:[true,'Los datos del Cirujano son necesarios']        
    },
    paciente:{
        type:Schema.ObjectId, 
        ref:'Paciente',
        require:[true,'Los datos paciente son necesarios']        
    },
    estado:{
        type:Boolean,
        default:true
      }
});


module.exports = model('Procedimiento',ProcedimientoSchema);