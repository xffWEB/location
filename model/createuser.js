const { select, insert } = require('../mysql/index');
let { USERS_INSERT_USERS, USERS_SELECT_ALLUSERS } = require('../mysql/actions');
let createuser = (req, res, next) => {
    let { userid, username, moneybase } = req.body;
    async function dealMysql(res, userid, username, moneybase) {
        let insertRes = await insert(USERS_INSERT_USERS, [userid, username, moneybase]);
        let selects = await select(USERS_SELECT_ALLUSERS);
        res.send({ selects });
    };
    dealMysql(res, userid, username, moneybase);
}
module.exports = createuser