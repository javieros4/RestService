const { Schema, model } = require("mongoose");

const rolScheque = Schema({
  rol: {
    type:String,
    require:[true, 'El rol es obligatorio']
  },
});

module.exports = model('Role', rolScheque);
