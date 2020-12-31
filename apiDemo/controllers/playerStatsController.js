const dbConnection = require('../database/connector');

class PlayerStatsController {
    static async lowest_shooting_perc(ctx){
        return new Promise((resolve, reject) => {
            dbConnection.query('CALL player_with_lowest_FG(@a)');
            dbConnection.query('SELECT @a' , (err, res) => {
                try {
                    if(err) {
                        ctx.body = 'Error';
                        reject(err);
                    }
                    ctx.status= 200;
                    ctx.body = res;
                    resolve();
                } catch(err) {
                    console.log(err);
                }
            });
    });
}

static async highest_shooting_perc(ctx){
    return new Promise((resolve, reject) => {
        dbConnection.query('CALL player_with_highest_shooting_perc(@b)');
        dbConnection.query('SELECT @b' , (err, res) => {
            try {
                if(err) {
                    ctx.body = 'Error';
                    reject(err);
                }
                ctx.status= 200;
                ctx.body = res;
                resolve();
            } catch(err) {
                console.log(err);
            }
        });
});
}

static async player_stats_view (ctx) {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM NB_game_stats AS a JOIN NB_players AS b ON a.player_ID = b.player_ID', (err, res) => {
            try {
                if(err) {
                    reject(err);
                }
                ctx.status = 200;
                ctx.body = res;
                resolve();
            } catch(err_1) {
                console.log(err_1);
            }
        });
    });
}


}
module.exports = PlayerStatsController ;
