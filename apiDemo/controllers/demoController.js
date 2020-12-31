const dbConnection = require('../database/connector');

class DemoController {
    static async demoMethod (ctx) {
        return new Promise((resolve, reject) => {
            dbConnection.query('SELECT * FROM BK_Teaches', (err, res) => {
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
                } catch(err_1) {
                    console.log(err_1);
                }
            });
        });
    }
    
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

}

module.exports = DemoController;
