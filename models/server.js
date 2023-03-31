const express = require('express');
const cors = require('cors');
const {dbConnection}  = require('../database/config')


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userRouterPath= '/api/user';

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
