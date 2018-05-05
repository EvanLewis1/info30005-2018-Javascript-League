//import "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAj832WWA8O7gZc0VPIuZ7Mv62ecnbzpo&callback=myMap"></script>

Bins = {
    list: [],

    loadList: function () {
        Bins.list = []//Load from server
    },

    addBin: function (coordinates) {
        //Send coordinates to server

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;

                data = JSON.parse(data)[0];
                console.log(data);
                console.log(1)
            }
            else{
                console.log(2)

                console.log("xhttp request failed?")
            }
            ;
            xhttp.open("POST", "/addBin", true);
            xhttp.send(JSON.stringify(coordinates));
        }
    }
};