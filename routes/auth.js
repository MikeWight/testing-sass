let {User} = require("./../models/user");

let express = require('express');
let router = express.Router();
let request = require('request');
const {authenticate} = require('./../middleware/authenticate');
const bcrypt = require('bcryptjs');
const _ = require('lodash');


router.post('/', async (req, res, next) => {
  try {
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email
    });
    console.log(user);
    await user.save();
    const token = await user.generateAuthTokens();
    res.header('x-auth', token).send(user.email);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post('/signin', async (req, res, next) => {
  try {
    console.log(req.body.password);
    console.log(req.body.email);
    const user = await User.findByCredentials(req.body.email, req.body.password);
    console.log(user);
    const token = await user.generateAuthTokens();
    res.header('x-auth', token).send(user.email);
  } catch (e) {
    console.log("fuck 4:" +e);
    res.status(400).send(e);
  }
});


module.exports = router;
