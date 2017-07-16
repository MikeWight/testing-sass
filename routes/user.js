let express = require('express');
let request = require('request');
const _ = require("lodash");
const {User} = require("../models/user");
let router = express.Router();
const {authenticate} = require('./../middleware/authenticate');
const {handleErrors} = require('./../utils/utils');


router.post('/', async (req, res) => {

  try {
    console.log(_.pick(req.body, ['username', 'nickname']));
    const body = _.pick(req.body, ['username', 'nickname']);
    const user = new User(body);
    await user.save();
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }

});

module.exports = router;
