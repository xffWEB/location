const { select } = require('../mysql/index');
let { USERS_SELECT_ALLUSERS } = require('../mysql/actions');
let getallusers = (req, res, next) => {
    async function dealMysql(res) {
        let selects = await select(USERS_SELECT_ALLUSERS);
        res.send({ selects });
    };
    dealMysql(res);
};
module.exports = getallusers;