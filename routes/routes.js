const path = require('path');

const views = '../views';

exports.index = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this function
    res.sendFile(path.join(__dirname, views + '/index.html'));
};

exports.game_screen = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this function
    res.sendFile(path.join(__dirname, views + '/board.html'));
};

exports.options_screen = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this function
    res.sendFile(path.join(__dirname, views + '/options.html'));
};