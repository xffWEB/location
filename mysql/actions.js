const USERS_SELECT_ALLUSERS = 'USERS_SELECT_ALLUSERS'; //获取所有用户
const USERS_SELECT_USERMESS = 'USERS_SELECT_USERMESS'; //获取个人所有提交信息
const USERS_SELECT_MONEYBASE = 'USERS_SELECT_MONEYBASE'; //获取个人的金钱基数
const USERS_SELECT_USERID = 'USERS_SELECT_USERID'; //获取个人的userid
const USERS_UPDATA_MONEYBASE = 'USERS_UPDATA_MONEYBASE'; //更新金钱基数
const USERS_INSERT_MESSAGE = 'USERS_INSERT_MESSAGE'; //添加个人提及信息
const USERS_UPDATA_BASICUSERNAME = 'USERS_UPDATA_BASICUSERNAME'; //更改basic用户名
const USERS_UPDATA_MOREUSERNAME = 'USERS_UPDATA_MOREUSERNAME'; //更改basic用户名
const USERS_DELETE_BASICUSERNAME = 'USERS_DELETE_BASICUSERNAME'; //删除basic的username
const USERS_DELETE_MOREUSERNAME = 'USERS_DELETE_MOREUSERNAME'; //删除more的username
const USERS_INSERT_USERS = 'USERS_INSERT_USERS'; //添加用户
module.exports = {
    [USERS_SELECT_ALLUSERS]: 'select * from basicMessage',
    [USERS_SELECT_USERMESS]: 'select * from moreMessage where username=?',
    [USERS_SELECT_MONEYBASE]: 'select moneybase from basicmessage where username=?',
    [USERS_SELECT_USERID]: 'select userid from basicmessage where username=?',
    [USERS_UPDATA_MONEYBASE]: 'update basicMessage set moneybase=? where username=?',
    [USERS_INSERT_MESSAGE]: 'insert into moreMessage(timer,username,spendmoney,remarks,userid) values (?,?,?,?,?)',
    [USERS_UPDATA_BASICUSERNAME]: 'update basicMessage set username=? where userid=?',
    [USERS_UPDATA_MOREUSERNAME]: 'update moreMessage set username=? where userid=?',
    [USERS_DELETE_BASICUSERNAME]: 'delete from basicMessage where username=?',
    [USERS_DELETE_MOREUSERNAME]: 'delete from moreMessage where username=?',
    [USERS_INSERT_USERS]: 'insert into basicMessage(userid,username,moneybase) values (?,?,?)'

}