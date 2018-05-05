Bins = {
    list: [
        //EXAMPLE DATA
        [-37.7967896, 144.9581293],
        [-37.7967896, 144.9681293],
        [-37.7967896, 144.9781293],
        [-37.7967896, 144.9881293],
    ],

    addBin: function(coordinates){

        //Change to Send coordinates to server
        list.push(coordinates)
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
