var router = require("routes/routes")

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(router);

app.get("styles/style.css", (req, res) => res.send("styles/style.css"))
app.get("styles/comingsoon.css", (req, res) => res.send("comingsoon/style.css"))


app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});