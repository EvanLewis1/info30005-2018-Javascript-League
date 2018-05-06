var data;
var userEmail;

var cookies = require("./Cookies.js");

function myFunction() {
    //verify email format
    var emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    userEmail = document.getElementsByClassName("Useremail");
    var email = userEmail.value;
    if(!emailRegex.test(email)){
        document.getElementById("email_span").style.color = "red";
        alert('Sorry, please enter the right email format');
    }

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
            console.log(passwordLogin);
            console.log("password = ",password);
            console.log((passwordLogin == password));
            if (passwordLogin == password){
                window.location.href = "Account.html";
            }else{
                alert('Sorry, your password is wrong. Please try again');
            }
        }
    };
    console.log("data=", data._id);
    xhttp.open("GET", "/api/email/"+userEmail[0].value, true);
    xhttp.send();
}

function register(){
    window.location.href = "Register.html";
}

function getUserEmail(){
    console.log(userEmail);
    return userEmail;
}

module.exports.getUserEmail = getUserEmail;