const DemoController = require('../controllers/demoController');
const demoController = require('../controllers/demoController');

const demoRoute = require('koa-router')({
	prefix: '/demo'
});

demoRoute.get('/', ctx =>{
	ctx.status = 200;
	ctx.body = 'This is the 2020-2021 Season NBA League API';
});

demoRoute.get('/lowest_shooting_perc', demoController.lowest_shooting_perc);
demoRoute.get('/highest_shooting_perc', demoController.highest_shooting_perc);

module.exports = demoRoute;

