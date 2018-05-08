const express = require('express');
const router = express.Router();
const bodyParser = require("../node_modules/body-parser");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

//app.set('views', path.join(__dirname, 'views'));
var controller = require('../controllers/controllers.js');

//Find all list items
router.get('/api',controller.findAllItem);

router.get('/Login.html/api',controller.findAllItem);


//find list item by id
router.get('/api/id/:id',controller.findOneItem);

//find list item by name
router.get('/api/name/:name',controller.findByName);

//find list item by email
router.get('/api/email/:email',controller.findByEmail);

//Create a new item
router.post('/api', controller.creatitem);

//Add bin loaction
router.post("/addBin", controller.addBin);


//update a user information
router.put('/api/id/:id',controller.updataItems);

//Load bin locations
router.get("/loadBins", controller.loadBins);

//add a device post
router.post("/api/device",controller.addPost);

//Load all posts
router.get("/loadAllPosts", controller.loadAllPosts);

//find posts of devices by email
router.get("/device/email/:email", controller.findPostsEmail);

// define the home page route
router.get('/', function(req, res) {
    res.send(path.join(__dirname, 'views/index.html'));
});

router.get('/Account', function(req, res) {
    res.send(path.join(__dirname, 'views/Account.html'));
});



module.exports = router;