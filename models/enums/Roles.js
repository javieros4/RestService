const {Schema, model} = require('mongoose');
 role:[
    consulta="consulta",
    admin="admin",
    gestor="gestor",
    operador="operador"
]

const RoleSchema = Schema({
value:String,
enum:role
});

module.exports = model('Role',RoleSchema)