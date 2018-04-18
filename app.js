const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(router)
app.use(express.static('public'));

app.use("/", function(req, res){res.send("views/index.html")})


app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});