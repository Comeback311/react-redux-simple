var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
	// Comment out this line:
	//res.send('respond with a resource');

	// And insert something like this instead:
	if (req.body.name === 'den') {
		res.json({
			success: true
		});
	}

	res.json({
		success: false,
		error: true
	});
});

module.exports = router;
