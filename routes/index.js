var express = require('express');
var router = express.Router(); 

var pool = require('../db/database');

pool.query('SELECT VERSION();', (err, res) =>{
	pool.end();
	json=res.rows;
	console.log(json);

});

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.render('index', { title: "Gio Lopez's HW3", version: json[0].version });
});

module.exports = router;