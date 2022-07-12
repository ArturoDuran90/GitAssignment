const path = require('path');

const views = '../views';

exports.index = (req, res) => {
    //When someone makes a request on the root level of a web server, respond with this function
    res.sendFile(path.join(__dirname, views + '/index.html'));
};