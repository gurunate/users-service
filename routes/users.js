const { Sequelize } = require('sequelize');
const { User } = require('../models');

module.exports = (server) => {
    server.get('/users', async (req, res, next) => {
        const users = await User.findAll();
        res.send(users || []);
        next();
    });

    server.get('/users/:id', async (req, res, next) => {
        const user = await User.findOne({ where: { id: req.params.id } });

        if (!user) {
            res.status(404);
        }

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

    server.post('/users/search', async (req, res, next) => {
        const { like, or } = Sequelize.Op;

        const users = await User.findAll({
            where: {
                [or]: [
                    {
                        firstName: {
                            [like]: `%${req.body.term}%`
                        }
                    },
                    {
                        lastName: {
                            [like]: `%${req.body.term}%`
                        }
                    },
                    {
                        email: {
                            [like]: `%${req.body.term}%`
                        }
                    }
                ]
            }
        });

        res.send(users || []);
        next();
    });

    server.del('/users/:id', async (req, res, next) => {
        const user = await User.findOne({ where: { id: req.params.id } });

        if (user) {
            await user.destroy();
            res.status(204);
        } else {
            res.status(404);
        }

        res.send();
        next();
    });
};
