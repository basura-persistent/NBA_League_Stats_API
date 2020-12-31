const playerStatsController = require('../controllers/playerStatsController');

const playerStatsRoute = require('koa-router')({
	prefix: '/playerstats'
});

playerStatsRoute.get('/', ctx =>{
	ctx.status = 200;
	ctx.body = 'This is The Player Stats Data Route';
});

playerStatsRoute.get('/lowest_shooting_perc', playerStatsController.lowest_shooting_perc);
playerStatsRoute.get('/highest_shooting_perc', playerStatsController.highest_shooting_perc);
playerStatsRoute.get('/view_player_stats', playerStatsController.player_stats_view);

module.exports = playerStatsRoute;
