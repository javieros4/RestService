const {Schema,model} = require('mongoose');

 formasPago:[
    efectivo="efectivo",
    tarjeta="tarjeta",
    amex="amex",
    carta="carta",
    cheque="cheque",
    deposito="deposito",
    transferencia="transferencia",
]


const  FormasPagoSchema = Schema({
    value:{
        type:String,
        enum:formasPago,
        default:formasPago.efectivo
    }
})

module.exports = model('FormasPago',FormasPagoSchema)