//import "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAj832WWA8O7gZc0VPIuZ7Mv62ecnbzpo&callback=myMap"></script>

Bins = {
    list: [],

    loadList: function () {

        if (Bins.list.length === 0) {

            Bins.list = [
                //EXAMPLE DATA
                new google.maps.LatLng(-37.7967896, 144.9581293),
                new google.maps.LatLng(-37.7967896, 144.9681293),
                new google.maps.LatLng(-37.7967896, 144.9781293),
            new google.maps.LatLng(-37.7967896, 144.9881293),
            ]
        }
    },

    addBin: function (coordinates) {

        //Change to Send coordinates to server
        Bins.list.push(coordinates)

        console.log(Bins.list)
    }

};
console.log(Bins.list)
// Bins.loadList();
console.log(Bins.list)



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
