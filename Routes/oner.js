var express = require('express')

var router = express.Router();
var con = require('../Controller/one')
router.get('/get',con.view)
module.exports = router;