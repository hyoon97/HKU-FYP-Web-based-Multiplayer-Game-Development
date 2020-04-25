var matchmaker = require('matchmaker');
var mms = new matchmaker;
var params = require('./mmsparam');

var mmrCalculator = (winner, loser, w_stats, l_stats) => {
    var mmrchange = params.MMRCHANGE_DEFAULT;
    
    // Account for k/d ratio (of loser)
    mmrchange -= Math.round(l_stats.kills / 4 * params.kd_ratio);

    // Account for total turns
    var logbase_turns = 1 / Math.log(params.turns_max);
    mmrchange -= Math.round(Math.log(Math.max(params.turns_max, w_stats.turns)) * logbase_turns * params.turns_coeff);

    // Account for difference in average time taken per turn
    var logbase_turntime = 1 / Math.log(params.avg_turn_time_max);
    if (w_stats.avg_turn_time==0 && l_stats.avg_turn_time==0) {}
    else if (w_stats.avg_turn_time==0) 
        mmrchange -= Math.round(Math.log(Math.max(params.avg_turn_time_max, l_stats.avg_turn_time)) * logbase_turntime * params.avg_turn_time_coeff);
    else if (l_stats.avg_turn_time==0) 
        mmrchange -= Math.round(Math.log(Math.max(params.avg_turn_time_max, w_stats.avg_turn_time)) * logbase_turntime * params.avg_turn_time_coeff);
    else
        mmrchange -= Math.round(( Math.log(Math.max(params.avg_turn_time_max, w_stats.avg_turn_time)) * logbase_turntime - Math.log(Math.max(params.avg_turn_time_max, w_stats.avg_turn_time)) * logbase_turntime + 1 ) / 2 * params.avg_turn_time_coeff);

    // Account for difference in average clicks per turn
    // mmrchange -= ( Math.log(Math.max(params.avg_clicks_logbase, w_stats.clicks_avg), params.avg_clicks_logbase) - Math.log(Math.max(params.avg_clicks_logbase, w_stats.clicks_avg), params.avg_clicks_logbase) + 1 ) / 2 * params.avg_clicks_coeff;
    var logbase_clicks = 1 / Math.log(params.avg_clicks_max)
    if (w_stats.clicks_avg==0 && l_stats.clicks_avg==0) {}
    else if (w_stats.clicks_avg==0) 
        mmrchange -= Math.round(Math.log(Math.max(params.avg_clicks_max, l_stats.clicks_avg)) * logbase_clicks * params.avg_clicks_coeff);
    else if (l_stats.clicks_avg==0) 
        mmrchange -= Math.round(Math.log(Math.max(params.avg_clicks_max, w_stats.clicks_avg)) * logbase_clicks * params.avg_clicks_coeff);
    else
        mmrchange -= Math.round(( Math.log(Math.max(params.avg_clicks_max, w_stats.clicks_avg)) * logbase_clicks - Math.log(Math.max(params.avg_clicks_max, w_stats.clicks_avg)) * logbase_clicks + 1 ) / 2 * params.avg_clicks_coeff);


    winner.mmr += mmrchange;
    loser.mmr -= mmrchange;
}

mms.policy = (a, b) => { //detemines if two players a and b should be matched together
    if (Math.abs(a.mmr-b.mmr) < params.POLICY_MMR_DIFF) 
        return 100;
    else return 0;
}

module.exports = mms;