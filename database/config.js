const mongoose = require('mongoose');

const dbConnection  = async() => {

try{

    await mongoose.connect(process.env.MONGODB_ATLAS,{
       useNewUrlParser:true,
       useUnifiedTopology:true,    
    });

    console.log('BD online');



}
catch(error){
console.log(error);
throw new  Error('Error en la BD iniciar');
}

}

module.exports ={
    dbConnection
}