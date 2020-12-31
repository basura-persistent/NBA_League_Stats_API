
//	Import other routers that will branch off of the default route. 

const coachAllRoute = require('./coachALL.js');
const playerRoute = require('./playerALL.js');
const playerStatsRoute = require('./playerStats.js');
const defaultRouter = require('koa-router')({
    prefix: '/api/v1'
});



// A basic KoaJS router
// Parameter 1: Route Path
// Parameter 2: Function to execute when this route activates
// API Path: /api/v1/s
defaultRouter.use(
    playerStatsRoute.routes()
);
defaultRouter.use(
    playerRoute.routes()
);
defaultRouter.use(
    coachAllRoute.routes()
);
defaultRouter.get('/', ctx => {
	ctx.status = 200;
	ctx.body = 'Hello World'
});
defaultRouter.post('/hello/', ctx => {
	let you = ctx.request.body.MyParam;
	ctx.status = 200;
	ctx.body = `Hello ${you}`;
});

defaultRouter.get('/hello/:you', ctx => {
    let you = ctx.params.you;
    ctx.status = 200;
    //insert
    ctx.body = `Hello ${you}`;
});

// Function to inject routes to Koa API
function addRoutesToAPI (api) {
    api.use(defaultRouter.routes());
    api.use(defaultRouter.allowedMethods());
  
}

module.exports = addRoutesToAPI;
