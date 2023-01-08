var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'T3N4CI0US | HACKING TEAM' });
});

router.get('/member', function(req, res, next) {
  res.render('member', { title: 'T3N4CI0US | Member' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'T3N4CI0US | Contact' });
});

router.get('/pwnable', function(req, res, next) {
  res.render('pwnable', { title: 'T3N4CI0US | Pwnable' });
});

router.get('/reversing', function(req, res, next) {
  res.render('reversing', { title: 'T3N4CI0US | Reversing' });
});

router.get('/web', function(req, res, next) {
  res.render('web', { title: 'T3N4CI0US | Web' });
});

router.get('/forensic', function(req, res, next) {
  res.render('forensic', { title: 'T3N4CI0US | Forensic' });
});

router.get('/crypto', function(req, res, next) {
  res.render('crypto', { title: 'T3N4CI0US | Crypto' });
});

router.get('/cve', function(req, res, next) {
  res.render('cve', { title: 'T3N4CI0US | CVE' });
});

router.get('/2023', function(req, res, next) {
  res.render('2023', { title: 'T3N4CI0US | 2023' });
});



router.get('/comming', function(req, res, next) {
  res.render('comming', { title: 'T3N4CI0US | Comming Soon' });
});

module.exports = router;
