var mongoose = require('mongoose');
var Items = mongoose.model('list');

var creatitem = function(req,res){
    var item = new Item({
        "name":req.body.name,
        "address": req.body.address,
        "phone": req.body.phone,
    });
    item.save(function (err,newItem) {
            if(!err){
                res.send(newItem);
            }else{
                res.sendStatus(400);
            }
    });
};

var findAllItems = function(req,res){
    Items.find(function(err,list){
        if(!err){
            res.send(list);
        }else{
            res.sendStatus(400);
        }
    });
};

var findOneItem = function(req,res){
    var itemIndex = req.params.id;
    Items.findById(itemIndex, function(err, item){
        if(!err){
            res.send(item);
        }else{
            res.sendStatus(404);
        }
    }) ;
};

var findByName = function(req,res){
    var itemName = req.params.name;
    Items.find({name: itemName}, function(err, item){
        if(!err){
            res.send(itemName);
        }else{
            res.sendStatus(404);
        }
    }) ;
}

module.exports.creatitem = creatitem;
module.exports.findAllItem = findAllItems;
module.exports.findOneItem = findOneItem;