//import "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAj832WWA8O7gZc0VPIuZ7Mv62ecnbzpo&callback=myMap"></script>

Bins = {
    list: [],

    loadList: function (callback) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                data = this.responseText
                Bins.list = JSON.parse(data)
                callback()
            }
            else{}
            ;
        }
        xhttp.open("GET", "/loadBins", true);
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhttp.send();

    },

    addBin: function (coordinates) {
        //Send coordinates to server


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
            else{}
            ;
        }
        xhttp.open("POST", "/addBin", true);
        xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhttp.send(JSON.stringify({location: coordinates}));

    }
};