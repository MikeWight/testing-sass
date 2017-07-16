let express = require('express');
let request = require('request');
const _ = require("lodash");
const {User} = require("./../models/user");
const {Poo} = require("./../models/poo");
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

router.get('/poos', async (req, res) => {
  try {
    console.log(req.header("_id"));
    let poos = await Poo.find({
      _creator: req.header("_id")
    });
    console.log(poos);
    if (poos.length > 0) {
      res.send({poos});
    } else {
      res.status(400).send("There is no poo for this user");
    }

  } catch (e){
    res.status(400).send("There is no poo for this user");
  }
});

router.post('/poo', async (req, res) => {
  console.log("It was hit");
    let poo = new Poo({
      size: req.body.size,
      smell: req.body.smell,
      dateAndTime: new Date(),
      _creator: req.body._id
    });
    poo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});


module.exports = router;
