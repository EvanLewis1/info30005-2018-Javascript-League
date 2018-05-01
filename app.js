const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static('views'));
app.use('/styles', express.static('styles'));
app.use('/assets/images', express.static('assets/images'));
app.use('/models', express.static('models'));

//Database setup
require('./models/db.js');

//route setup
var routes = require('./routes/routes');
app.use('/',routes);

/*app.get('/api', function(req,res){
    res.send(list);
});

app.get('/api/:id', function(req,res){
    res.send(list[req.params.id]);
});*/

app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});