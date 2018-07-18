const mysql = require('mysql'); //引入mysql

let getConnection = () => {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'projectone'
        });
        return connection;
    } //创建数据库
let select = (sql, query) => {
    let connection = getConnection();
    return new Promise((reslove, reject) => {
        connection.query(sql, query, (err, info) => { //执行语句
            if (!err) {
                reslove(info);
            }
            connection.end();
        });
    });
}
let insert = (sql, query) => {
    let connection = getConnection();
    return new Promise((reslove, reject) => {
        connection.query(sql, query, (err) => {
            if (!err) {
                reslove({ msg: 'ok' });
            }
            connection.end();
        })
    })
}
let dele = (sql, query) => {
    let connection = getConnection();
    return new Promise((reslove, reject) => {
        connection.query(sql, query, (err) => {
            if (!err) {
                reslove({ msg: 'ok' });
            }
            connection.end();
        })
    })
}
let reusers = (sql, query) => { //更改用户名
    let connection = getConnection();
    return new Promise((reslove, reject) => {
        connection.query(sql, query, (err) => {
            if (!err) {
                reslove({ msg: 'ok' });
            }
            connection.end();
        })
    })
}
module.exports = {
    select,
    insert,
    dele,
    reusers
}