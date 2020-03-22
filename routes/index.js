const glob = require('glob');

module.exports = server => {
    glob.sync(`${__dirname}/!(index).js`).map(file => {
        require(file)(server);
    });
};