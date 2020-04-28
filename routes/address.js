const { Address } = require('../models');

module.exports = (server) => {
    server.get('/addresses', async (req, res, next) => {
        const addresses = await Address.findAll();
        res.send(addresses || []);
        next();
    });

    server.get('/addresses/:id', async (req, res, next) => {
        const address = await Address.findOne({ where: { id: req.params.id } });

        if (!address) {
            res.status(404);
        }

        res.send(address || {});
        next();
    });

    server.put('/addresses', async (req, res, next) => {
        const address = await Address.create(req.body);
        res.send(address || []);
        next();
    });

    server.post('/addresses/:id', async (req, res, next) => {
        const address = await Address.findOne({ where: { id: req.params.id } });

        Object.assign(address, req.body);

        await address.save();

        res.send(address);
        next();
    });

    server.del('/addresses/:id', async (req, res, next) => {
        const address = await Address.findOne({ where: { id: req.params.id } });

        if (address) {
            await address.destroy();
            res.status(204);
        } else {
            res.status(404);
        }

        res.send();
        next();
    });
};
