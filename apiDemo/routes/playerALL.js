const playerController = require('../controllers/playerController');

const playerRoute = require('koa-router')({
	prefix: '/players'
});

playerRoute.get('/', ctx =>{
	ctx.status = 200;
	ctx.body = 'This is the player data Route';
});

playerRoute.get('/rings_by_player', playerController.ring_by_player_view);
playerRoute.get('/all_players', playerController.view_all_players);
playerRoute.get('/insert_player/:player/:id', playerController.insert_player);



module.exports = playerRoute;


