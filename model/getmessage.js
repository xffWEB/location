const { select } = require('../mysql/index');
let { USERS_SELECT_USERMESS } = require('../mysql/actions');
let getmessage = (req, res, next) => { //删除用户
    let { username } = req.body;
    async function dealMysql(res) {
        let selects = await select(USERS_SELECT_USERMESS, [username]);
        res.send({ selects });
    }
    dealMysql(res);
}
module.exports = getmessage;