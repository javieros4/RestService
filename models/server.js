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

    this.app.use(this.authPath, require('../routes/auth.routes'));
    this.app.use(this.userRouterPath, require('../routes/user.routes'));
    this.app.use(this.personaRouterPath, require('../routes/persona.routes'));
    this.app.use(this.hospitalRouterPath,require('../routes/hopital.router'));
    this.app.use(this.direccionRouterPath,require('../routes/direccion.routes'));
    

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
