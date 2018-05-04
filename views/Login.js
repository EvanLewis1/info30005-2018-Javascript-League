const bodyParser = require("../node_modules/body-parser");
/*router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());*/

var data;

function myFunction() {
    var data;
    var userEmail = document.getElementsByClassName("Useremail");
    var password = document.getElementsByClassName("Userpassword");
    password= password[0].value;
    console.log(userEmail[0].value);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = this.responseText;
            data = JSON.parse(data)[0];
            console.log(data);
            passwordLogin = data.passwordHash;
            console.log(data);
            console.log("password = ",password);
            console.log(passwordLogin == password);
            if (passwordLogin == password){
                window.location.href = "Account.html";
            }else{
                alert('sorry, your password is wrong. Please try again');
            }
        }
    };
    xhttp.open("GET", "/api/email/"+userEmail[0].value, true);
    xhttp.send();
}

module.exports.data = data;