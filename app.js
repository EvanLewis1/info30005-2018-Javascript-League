var router = require("routes/routes")

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(router);

app.get("styles/style.css", (req, res) => res.send("styles/style.css"))

app.get("styles/comingsoon.css", (req, res) => res.send("styles/comingsoon.css"))

app.get("styles/where.css", (req, res) => res.send("styles/where.css"))

app.get("styles/Donation.css", (req, res) => res.send("styles/Donation.css"))

app.get("styles/how", (req, res) => res.send("styles/how.css"))

app.get("styles/what.css", (req, res) => res.send("styles/what.css"))



app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});