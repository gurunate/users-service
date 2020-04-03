module.exports = server => {
    server.get('/healthcheck', (_, res, next) => {
        res.send(true);
        next();
    });
};
