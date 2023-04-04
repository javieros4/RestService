const {Schema,model} = require('mongoose');

const UsuarioSchema = Schema({
nombre:{
    type:String,
    require:[true,'El nombre es requerido']
},

correo:{
    type:String,
    require:[true,'El correos es requerido'],
    unique:true
},
password:{
    type:String,
    require:[true,'La contraseña es requerida'],
},
img:{
    type:String
},
rol:{
    type:String,
    require:[true],
    enum:['ADMIN_ROLE','USER_ROLE']
},
google:{
    type:Boolean,
default:false
}
});

module.exports =model('Usuario' , UsuarioSchema);