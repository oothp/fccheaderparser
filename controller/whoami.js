const path = require('path')

const getDetails = (req, res) => {

    whoami = {
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    }
    res.json(whoami)
}

const getHome = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'))
}

module.exports = {
    getDetails,
    getHome,
}