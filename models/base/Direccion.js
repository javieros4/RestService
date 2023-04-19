const { Schema, model } = require("mongoose");

const DireccionSchema =Schema({
calle:{
    type:String,
    require:[true,'La calle es requerica']    
},
numExt:{
    type:String,
    require:[true,'El numero exterior es requerido']    
},
numInt:{
    type:String
},
colonia:{
    type:String
},
delegacion:{
    type:String
},
municipio:{
    type:String
},
CP:{
    type:String
},
ref1:{
    type:String
},
ref2:{
    type:String
},
estado:{
    type:Boolean,
    default:true
  }

});

module.exports = model('Direccion',DireccionSchema);