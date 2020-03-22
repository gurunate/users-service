const restify = require('restify');
const routes = require('./routes');
const app = require('./package.json');

require('dotenv').config();

let server = restify.createServer({
    name: app.name,
    version: app.version
});

server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

routes(server);

server.listen(process.env.PORT, () => {
    console.log(`${server.name} listening at ${server.url}`);
});