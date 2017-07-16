let authenticate  = (req, res, next) => {
    let token = req.get("token");

    if (token === undefined) {
        next();
    } else {
        res.status(400).send();
    }

};

module.exports = {authenticate};