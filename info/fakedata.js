var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fakedata = [{ "name": "KaleighMueller",
    "address": "06279 Metz Corner, Louisiana,  Tokelau",
    "phone": "370.602.9373 x5616" },
    { "name": "StanleyMaggio",
        "address": "3213 Botsford Plaza, New Jersey,  Czech Republic",
        "phone": "167-304-6974" },
    { "name": "MarceloLind",
        "address": "80681 Granville Extensions, Washington,  Chad",
        "phone": "297.802.5889 x18999" },
    { "name": "LaceyAufderhar",
        "address": "116 Precious Ville, Idaho,  Montserrat",
        "phone": "183-013-3242" },
    { "name": "ZelmaKemmer",
        "address": "737 Corkery Shores, Alaska,  Benin",
        "phone": "724.997.0825" },
    { "name": "ScottieMayert",
        "address": "5712 Rod Crossing, Louisiana,  Saudi Arabia",
        "phone": "769-648-8972 x51537" },
    { "name": "DelphaReilly",
        "address": "2433 Jaquan Plaza, West Virginia,  Gabon",
        "phone": "(653) 447-5085 x0666" },
    { "name": "RonBeier",
        "address": "939 Schmeler Mountain, West Virginia,  Republic of Korea",
        "phone": "(105) 284-2206" },
    { "name": "MaximeCruickshank",
        "address": "0929 Hollie Crossroad, Delaware,  Antarctica (the territory South of 60 deg S)",
        "phone": "1-461-834-7700 x55216" },
    {  "name": "CasandraBuckridge",
        "address": "5077 Kuhn Wells, Maine,  Myanmar",
        "phone": "599-973-7677 x66543" }] ;

function getApi()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.localhost:3000/api", false);
    xhr.send();
    console.log(xhr.status);
    console.log(xhr.statusText);
}

var object = JSON.parse(fakedata);
console.log(object);
module.exports.fakedata = fakedata;



