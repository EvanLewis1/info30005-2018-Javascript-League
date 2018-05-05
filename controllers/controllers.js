var mongoose = require('mongoose');

var Items = mongoose.model('lists');

var creatitem = function(req,res){
    //console.log(req.body);
    var item = new Items({
        "name":req.body.name,
        "address": req.body.address,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "phone": req.body.phone,
        "email": req.body.email,
        "passwordHash": req.body.passwordHash,
    });
    item.save(function (err,newItems) {
            if(!err){
                res.send(newItems);
            }else{
                res.sendStatus(400);
            }
    });
};

var addBin = function(req,res){
    var bin = new Items({
        location: req.location,
    });
    bin.save(function(err,newItems){
        if(!err){
            res.send("ok");
        }else{
            res.sendStatus(400);
        }
    })
};

var findAllItems = function(req,res){
    Items.find({},function(err,lists){
        if(!err){
            //console.log(lists);
            res.send(lists);
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
            res.send(item);
        }else{
            res.sendStatus(404);
        }
    }) ;
}

var findByEmail = function(req,res){
    var itemEmail =  req.params.email;
    Items.find({email: itemEmail}, function(err,item){
        if(!err){
            res.send(item);
        }else{
            res.sendStatus(404);
        }
    });
}

module.exports.creatitem = creatitem;
module.exports.findAllItem = findAllItems;
module.exports.findOneItem = findOneItem;
module.exports.findByName = findByName;
module.exports.findByEmail = findByEmail;
module.exports.addBin = addBin;