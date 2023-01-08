var express = require('express');
var router = express.Router();

router.get('/cve-2014-6271', function(req, res, next) {
    res.render('cve/cve-2014-6271', { title: 'T3N4CI0US | CVE-2014-6271' });
});

module.exports = router;
