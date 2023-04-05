const {Schema, model} = require('mongoose');
 roles:[
    consulta="consulta",
    admin="admin",
    gestor="gestor",
    operador="operador"
]

const RolesSchema = Schema({
value:String,
enum:roles
});

module.exports = model('Roles',RolesSchema)