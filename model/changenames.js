const { select, reusers } = require('../mysql/index');
let { USERS_SELECT_ALLUSERS, USERS_UPDATA_BASICUSERNAME, USERS_UPDATA_MOREUSERNAME } = require('../mysql/actions');
let changenames = (req, res, next) => { //删除用户
    let { userid, newname } = req.body;
    async function dealMysql(res) {
        let reu = await reusers(USERS_UPDATA_BASICUSERNAME, [newname, userid * 1]);
        let re = await reusers(USERS_UPDATA_MOREUSERNAME, [newname, userid * 1]);
        let selects = await select(USERS_SELECT_ALLUSERS);
        res.send({ selects });
    };
    dealMysql(res);
}
module.exports = changenames