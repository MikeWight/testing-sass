let express = require('express');
let router = express.Router();
let request = require('request');
const {authenticate} = require('./../middleware/authenticate');
let {PropertyLoader} = require('./../properties/PropertyLoader.js');

router.get('/', authenticate, (req, res) => {

    let propLoader = new PropertyLoader('.properties');
    let properties = propLoader.loadDomains();
    res.send(properties);

}); //End GET Property Domains

router.get('/:domain', authenticate, (req, res) => {

    let propLoader = new PropertyLoader('.properties');
    if (req.query.language === undefined) {
        res.status(400).send('Missing language parameter.');
    }

    let properties = propLoader.loadProperties(req.params.domain, req.query.language);
    if (properties === undefined) {
        res.status(400).send('Invalid domain.');
    }

    res.send(properties[req.params.domain][req.query.language]);
}); // End GET Properties

module.exports = router;