const { select, dele } = require('../mysql/index');
let { USERS_DELETE_BASICUSERNAME, USERS_DELETE_MOREUSERNAME, USERS_SELECT_ALLUSERS } = require('../mysql/actions');
let deluser = (req, res, next) => { //删除用户
    let { info } = req.body;
    async function dealMysql(res) {
        let deles = await dele(USERS_DELETE_BASICUSERNAME, [info]);
        let del = await dele(USERS_DELETE_MOREUSERNAME, [info]);
        let selects = await select(USERS_SELECT_ALLUSERS);
        res.send({ selects });
    };
    dealMysql(res);
};
module.exports = deluser