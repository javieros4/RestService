const express = require('express');
const cors = require('cors');
const {dbConnection}  = require('../database/config')


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.userRouterPath= '/api/user';
    this.personaRouterPath = '/api/persona';
    this.authPath = '/api/auth';
    this.hospitalRouterPath ='/api/hospital';
    this.direccionRouterPath ='/api/direccion';
    this.contactoRouterPath ='/api/contacto';

    //conectar BD
    this.conectarDB();


    //middlewares
    this.middlewares();
  
    //rutas de aplicacion
    this.routes();
  }

  middlewares() {
    
    //directorio publico
    this.app.use(express.static("public"));
    
    //Lectura y parseo del body
    this.app.use(express.json());
    
    //cors
    this.app.use(cors());
  }

  routes() {

    this.app.use(this.authPath, require('../routes/Auth.routes'));
    this.app.use(this.userRouterPath, require('../routes/User.routes'));
    this.app.use(this.personaRouterPath, require('../routes/Persona.routes'));
    this.app.use(this.hospitalRouterPath,require('../routes/Hospital.routes'));
    this.app.use(this.direccionRouterPath,require('../routes/Direccion.routes'));
    this.app.use(this.contactoRouterPath,require('../routes/Contacto.routes'));
    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en", this.port);
    });
  }

  async conectarDB(){
    await dbConnection();
  }
}

module.exports = Server;
