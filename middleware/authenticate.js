let {User} = require('./../models/user');

let authenticate  = (req, res, next) => {
  let token = req.headers.authorization;
  console.log(token);
  User.findByToken(token).then((user) => {
    if (!user){
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    console.log(e);
    res.status(401).send();
  });

};

module.exports = {authenticate};
