const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static('views'));
app.use('/styles', express.static('styles'));
app.use('/assets/images', express.static('assets/images'));
app.use('/models', express.static('models'));


app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});