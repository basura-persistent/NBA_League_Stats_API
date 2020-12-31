const dbConnection = require('../database/connector');

class CoachController{
    static async all_coaches_teams(ctx){
        return new Promise((resolve, reject) => {
            dbConnection.query('SELECT b.coach_name, c.team_name from NB_playersandteams_coached_by AS a JOIN NB_coaches AS b ON a.coach_id = b.coach_id JOIN NB_teams AS c ON c.team_id = a.team_id' , (err, res) => {
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
static async insert_coach(ctx) {
    return new Promise((resolve, reject) => {
        let coach = ctx.params.coach;
        let pars_coach = coach.slice(1);
        let id = ctx.params.id;
        let pars_id = id.slice(1);
        dbConnection.query('SELECT insert_coach2(?, ?)',[pars_coach, pars_id] ,(err, res) => {
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

module.exports = CoachController;