const bcryptjs = require("bcryptjs");

  //escriptar password
  const DataHash = (password ='') =>{
    const salt = bcryptjs.genSaltSync(11);
    return bcryptjs.hashSync(password, salt);
  }
 

module.exports = DataHash;