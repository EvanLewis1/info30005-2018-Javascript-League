//import "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAj832WWA8O7gZc0VPIuZ7Mv62ecnbzpo&callback=myMap"></script>

Bins = {
    list: [],

    loadList: function () {
            Bins.list = []//Load from server
    },
    
    addBin: function (coordinates) {
        //Send coordinates to server
    }
};

//LOAD LIST FROM SERVER

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         data = this.responseText;
//
//         data = JSON.parse(data)[0];
//         console.log(data);
//         passwordLogin = data.passwordHash;
//         console.log(passwordLogin);
//         console.log("password = ",password);
//         console.log((passwordLogin == password));
//         if (passwordLogin == password){
//             window.location.href = "Account.html";
//         }else{
//             alert('Sorry, your password is wrong. Please try again');
//         }
//     }
// };
// xhttp.open("GET", "/api/email/"+userEmail[0].value, true);
// xhttp.send();
