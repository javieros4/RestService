const express = require('express');
const cors = require('cors');
const {dbConnection}  = require('../database/config')


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.userRouterPath= '/api/user';
    this.personaRouterPath = '/api/persona';

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
   
    this.app.use(this.userRouterPath, require('../routes/user.routes'));
    this.app.use(this.personaRouterPath, require('../routes/personas.routes'));


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
