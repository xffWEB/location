let getallusers = (req, res, next) => {
    async function dealMysql(res) {
        let selects = await select('select * from basicMessage');
        res.send({ selects });
    };
    dealMysql(res);
};
module.exports = getallusers;