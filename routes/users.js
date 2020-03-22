const { User } = require('../models');


module.exports = server => {
    server.get('/users', async (req, res, next) => {
        const users = await User.findAll();
        res.send(users || []);
        next();
    });

    server.get('/users/:id', async (req, res, next) => {
        const user = await User.findOne({ where: { id: req.params.id } });
        res.send(user || {});
        next();
    });

    server.put('/users', async (req, res, next) => {
        const user = await User.create(req.body);
        res.send(user || []);
        next();
    });

    server.post('/users/:id', async (req, res, next) => {
        const user = await User.findOne({ where: { id: req.params.id } });

        Object.assign(user, req.body);

        await user.save();

        res.send(user);
        next();
    });

    server.del('/users/:id', async (req, res, next) => {
        const user = await User.findOne({ where: { id: req.params.id } });
        user.destroy();
        res.status(204);
        res.send();
        next();
    });
};
