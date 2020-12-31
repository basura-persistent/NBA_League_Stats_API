const dbConnection = require('../database/connector');

class PlayerController{
    
    static async view_all_players(ctx) {
        return new Promise((resolve, reject) => {
            dbConnection.query('SELECT * FROM NB_players', (err, res) => {
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

    static async ring_by_player_view (ctx) {
        return new Promise((resolve, reject) => {
            dbConnection.query('SELECT * FROM ring_count_by_player', (err, res) => {
                try {
                    if(err) {
                        reject(err);
                    }
                    ctx.status = 200;
                    ctx.body = res;
                    resolve();
                } catch(err) {
                    console.log(err);
                }
            });
        });
    }

    static async insert_player(ctx) {
        return new Promise((resolve, reject) => {
            let player = ctx.params.player;
            let pars_play = player.slice(1);
            let id = ctx.params.id;
            let pars_id = id.slice(1);
            dbConnection.query('SELECT insert_player(?, ?)',[pars_play, pars_id] ,(err, res) => {
                try {
                    if(err) {
                        ctx.body = 'Error';
                        reject(err);
                    }
                    ctx.status= 200;
                    ctx.body = Object.values(res[0]);
                    console.log(Object.values(res));
                    resolve();
                } catch(err) {
                    console.log(err);
                }
            });
        });
    }
    




}

module.exports = PlayerController;
