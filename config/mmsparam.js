// List of parameters for use of the MMS
// "importance" refers to the multiplier to control how much a certain stas affect the mmr change

module.exports = {

    // Max change to MMR before accounting for performance
    MMRCHANGE_DEFAULT: 100,

    // Min change to MMR after accounting for performance
    MRMCHANGE_MIN: 20,

    // MMR difference for mms.policy
    // two players of MMR difference less than this will be considered to be paired
    POLICY_MMR_DIFF: 100,

    kd_coeff: 30, // importance of k/d ratio

    dmg_dealt_max: 300, // the cap to damage dealt, also the base of log operation
    dmg_dealt_coeff: 10, //  importance of damage dealt

    turns_max: 100, // the cap to turns, also the base of log operation
    turns_coeff: 20, // importance of turns

    avg_turn_time_max: 100, // the cap to average turn time, also the base of log operation
    avg_turn_time_coeff: 20, // importance of average turn time

    avg_clicks_max: 30, // the cap to average clicks per turn, also the base of log operation
    avg_clicks_coeff: 20, // importance of average clicks per turn
}