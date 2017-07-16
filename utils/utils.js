let handleErrors  = (error, response, body, res) => {
    if (response !== undefined && body !== undefined) {
        console.log('Error-' + response.statusCode + ': ' + body);
        res.status(response.statusCode).send(body);
    } else if (response !== undefined && response.statusCode !== undefined) {
        res.status(response.statusCode).send(response.statusMessage);
    } else if (error !== undefined ) {
        console.log('Error:'+ error);
        res.status(500).send(error);
    } else {
        res.status(500).send("An unknown error has occurred.");
    }
};

module.exports = {handleErrors: handleErrors};