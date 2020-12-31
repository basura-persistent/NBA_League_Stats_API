const coachAllController = require('../controllers/coachController');

const coachAllRoute = require('koa-router')({
	prefix: '/coaches'
});

coachAllRoute.get('/', ctx =>{
	ctx.status = 200;
	ctx.body = 'This is the Coach Data API ';
});

coachAllRoute.get('/view_all_coaches_teams', coachAllController.all_coaches_teams);
coachAllRoute.get('/insert_coach/:coach/:id', coachAllController.insert_coach);

module.exports = coachAllRoute;