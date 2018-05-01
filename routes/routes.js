const express = require('express');
const router = express.Router();

//app.set('views', path.join(__dirname, 'views'));
var controller = require('../controllers/controllers.js');

//Find all list items
router.get('/api',controller.findAllItem);

//find list item by id
router.get('/api/id/:id',controller.findOneItem);

// define the home page route
router.get('/', function(req, res) {
    res.send(path.join(__dirname, 'views/index.html'));
});

router.get('/Account', function(req, res) {
    res.send(path.join(__dirname, 'views/Account.html'));
});



module.exports = router;