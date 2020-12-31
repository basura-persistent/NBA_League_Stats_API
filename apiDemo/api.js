// Import the Koa Module into the project
const Koa = require('koa');
// Initialize a Koa API
const api = new Koa();
// Bring the routes into the project.
const routes = require('./routes/default');
//IMPORT KOA BODYPASRSER INTHE API
const bodyparser = require('koa-bodyparser');
// Define an API port
const API_PORT = 8206;
//Inject koa bodyparser
api.use(bodyparser());
// Injecting the routes into the api
routes(api);
// Telling KoaJS to start listening to requests. 
api.listen(API_PORT);
