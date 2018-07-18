const { select, insert, reusers } = require('../mysql/index');
let { USERS_INSERT_MESSAGE, USERS_SELECT_MONEYBASE, USERS_SELECT_USERID, USERS_UPDATA_MOREUSERNAME } = require('../mysql/actions');
let addmess = (req, res, next) => { //删除用户
    let { timer, username, spendmoney, remarks } = req.body.newmess;
    async function dealMysql(res) {
        let selects = await select(USERS_SELECT_MONEYBASE, [username]);
        let userid = await select(USERS_SELECT_USERID, [username]);
        let reu = await reusers(USERS_UPDATA_MOREUSERNAME, [selects[0].moneybase * 1 + spendmoney * 1, username]);
        let insertRes = await insert(USERS_INSERT_MESSAGE, [timer, username, spendmoney, remarks, userid[0].userid]);
        res.send({ msg: '信息提交成功成功', code: 1 });
    }
    dealMysql(res);
}
module.exports = addmess