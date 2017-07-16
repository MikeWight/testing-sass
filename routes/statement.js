let express = require('express');
let request = require('request');
let router = express.Router();
const {authenticate} = require('./../middleware/authenticate');
const {handleErrors} = require('./../utils/utils');

router.get('/*', authenticate, (req, res) => {

    let paths = req.originalUrl.split('?')[0].split('/');
    let url = '';

    paths.splice(0,2);
    paths.forEach(path => { url += '/' + path });
    url = process.env.API_URI + '/statements/3.0' + url;
    console.log( 'Callings: ' + url );

    request.get( url,
        {
            headers: {
                'Authorization': req.get('Authorization')
            }, qs : req.query
        },
         (error, response, body) => {
            if (!error && response.statusCode === 200) {
                body = JSON.parse(body);
                //console.log('coverage: ' + body);
                res.send(body);
            } else {
                handleErrors(error, response, body, res);
            }
        }
    );
    
});

module.exports = router;