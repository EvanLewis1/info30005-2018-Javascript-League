const express = require('express');
const router = express.Router();

app.set('views', path.join(__dirname, 'views'));


// define the home page route
router.get('/', function(req, res) {
    res.send(path.join(__dirname, 'views/index.html'));
});

router.get('/Account', function(req, res) {
    res.send(path.join(__dirname, 'views/Account.html'));
});
module.exports = router;