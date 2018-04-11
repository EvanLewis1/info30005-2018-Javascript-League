var express = require('express');
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));


// define the home page route
router.get('/', function(req, res) {
    res.send(path.join(__dirname, 'views/index.html'));
});



module.exports = router;