const { User } = require('../models');


module.exports = server => {
    server.get('/users', async (req, res, next) => {
        const users = await User.findAll();
        res.send(users);
        next();
    });

    server.post('/users', async (req, res, next) => {
        const user = await User.create(req.body);
        res.send(user);
        next();
    });
};
