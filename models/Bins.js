//import "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAj832WWA8O7gZc0VPIuZ7Mv62ecnbzpo&callback=myMap"></script>

Bins = {
    list: [],

    loadList: function () {
        Bins.list = []//Load from server
    },

    addBin: function (coordinates) {
        //Send coordinates to server

        console.log(0)

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log(3)
            if (this.readyState == 4 && this.status == 200) {
                console.log(1)
            }
            else{
                console.log(2)

                console.log("xhttp request failed?")
            }
            ;
        }
        xhttp.open("POST", "/addBin", true);
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhttp.send(JSON.stringify({location: coordinates}));
        console.log(5)

    }
};