var express = require('express');
var router = express.Router();
let createuser = require('../model/createuser');
let getallusers = require('../model/getallusers');
let deluser = require('../model/deluser');
let changenames = require('../model/changenames');
let addmess = require('../model/addmess');
let getmessage = require('../model/getmessage');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    next();
});
router.post('/createuser', createuser);
router.post('/getallusers', getallusers);
router.post('/deluser', deluser);
router.post('/changenames', changenames);
router.post('/addmess', addmess);
router.post('/getmessage', getmessage);
module.exports = router;