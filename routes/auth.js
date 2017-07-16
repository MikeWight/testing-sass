let express = require('express');
let router = express.Router();
let request = require('request');
const {authenticate} = require('./../middleware/authenticate');


router.post('/login', (req, res) => {

    request.post(
        process.env.API_URI + '/members/3.0/profile?language=en',
        {
            json: {
                'username': req.body.username,
                'password': req.body.password,
                'sub': 'BCM'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        },
        (error, response, body) => {
            console.log("Medavie Response: " + response.statusCode);
            if (!error && response.statusCode === 200) {
                console.log("Login Successful for "+ req.body.username);
                res.set('X-AUTH', response.headers['x-auth']);
                res.status(200).send(body);
            } else {
                console.log(error);
                res.status(401).send("Invalid username or password.");
            }

        }
    );
});

router.get('/logout', function(req, res){
    console.log('Cookies: ', req.cookies);
    res.clearCookie('token');
    res.clearCookie('profile');
    res.status(200).send();
});

module.exports = router;