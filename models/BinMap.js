//Controls the map on Where page


//Google map object
var map;

//Geocoder, converts readable representations of locations to coordinates and vice versa
var geocoder;

//Focus location marker
var FocusMarker;

//Called when google map API loads
function myMap() {


    //Create Geocoder
    geocoder = new google.maps.Geocoder();


    //Create map
    var mapOptions = {
        center: new google.maps.LatLng(-37.7967896, 144.9581293),//Centre here if user's location not found
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.MAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Create Focus location marker
    FocusMarker = new google.maps.Marker({
        map: map,
        title: 'Location Focus'
    });


    //Try and get users location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            console.log("pan to ", position)

            //Pan to User location
            map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude))

            //Show where user is
            FocusMarker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude))

            // Update closest bin info
            getClosestBin()

        })
    }
    else {
        console.log("User Location Permissions Blocked")
    }


    //Load Bin locations from server then run callback
    Bins.loadList(drawBins)
}

//Draw marker on map for each bin
function drawBins() {
    Bins.list.forEach(function (bin) {
        new google.maps.Marker({
            position: new google.maps.LatLng(bin.location[0], bin.location[1]),
            map: map,
            icon: {
                url: "../assets/images/bin.png",
                scaledSize: new google.maps.Size(20, 20),
            },
            title: 'E-bin'
        });
    });

    //Update info for where closest bin is
    getClosestBin()

}

// Pan to user input on button press
function searchPostCode() {

    //Grab user input
    var address = document.getElementById("suburb")
    var postcode = document.getElementById("postcode")

    var input = address.value + " " + postcode.value

    //Convert user input to coordinates
    geocoder.geocode({'address': input}, function (results, status) {
        if (status === 'OK') {

            //Pan to best result
            map.panTo(results[0].geometry.location);

            //Focus on best result
            FocusMarker.setPosition(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()))

            //Update closest bin info
            getClosestBin()

        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

//Update closest bin info display to show closest recycling bin to current map focus
function getClosestBin() {

    //Do nothing if map doesn't have a focus or no Bins loaded
    if (!FocusMarker.getPosition() || Bins.list.length === 0) {
        return
    }


    var closest;

    //Compare list for closest bin to focus
    Bins.list.forEach(function (bin) {

        var binLoc = new google.maps.LatLng(bin.location[0], bin.location[1]);

        var focusLocation = new google.maps.LatLng(FocusMarker.getPosition().lat(), FocusMarker.getPosition().lng())

        var distance = google.maps.geometry.spherical.computeDistanceBetween(binLoc, focusLocation)

        if (!closest || closest.dist > distance) {
            closest = {loc: binLoc, dist: distance}
        }
    });

    //Convert closest bin location to readable text
    geocoder.geocode({'location': closest.loc}, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {

                //Change displayed info
                document.getElementById("closest").innerText = results[0].formatted_address

            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    })
}
