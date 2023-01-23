var express = require('express');
var router = express.Router();

router.get('/kctf', function(req, res, next) {
    res.render('write/kctf', { title: 'T3N4CI0US | KCTF 2023' });
});

module.exports = router;
