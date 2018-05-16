//Controls the map on Where page


//Google map object
var map;

//Geocoder, converts readable representations of locations to coordinates and vice versa
var geocoder;

//Focus location marker
var FocusMarker;

// Finds directions between two points
var directionsService

// Renders directions on map
var directionsDisplay

//Closest bin to focusMarker
var closest;


//Called when google map API loads
function myMap() {


    //Create Services
    geocoder = new google.maps.Geocoder();
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});


    //Create map
    var mapOptions = {
        center: new google.maps.LatLng(-37.7967896, 144.9581293),//Centre here if user's location not found
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.MAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    directionsDisplay.setMap(map);


    //Create Focus location marker
    FocusMarker = new google.maps.Marker({
        map: map,
        title: 'Location Focus'
    });

    //Open infowindow on click
    FocusMarker.addListener('click', function () {

        focuslocation = new google.maps.LatLng(FocusMarker.getPosition().lat(), FocusMarker.getPosition().lng())
        geocoder.geocode({'location': focuslocation}, function (results, status) {
            if (status === 'OK') {

                if (FocusMarker.infowindow) {
                    FocusMarker.infowindow.close()
                }
                FocusMarker.infowindow = new google.maps.InfoWindow({
                    content: results[0].formatted_address
                });

                FocusMarker.infowindow.open(map, FocusMarker);

            }
            else {
                console.log(status)
            }
        });
    });


    //Try and get users location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            console.log("pan to ", position);

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

        var binLocation = new google.maps.LatLng(bin.location[0], bin.location[1])


        var marker = new google.maps.Marker({
            position: binLocation,
            map: map,
            icon: {
                url: "../assets/images/binRed.png",
                scaledSize: new google.maps.Size(25, 25),
            },
            title: 'E-bin'
        });

        //Open infowindow on click
        marker.addListener('click', function () {

            geocoder.geocode({'location': binLocation}, function (results, status) {
                if (status === 'OK') {


                    var infowindow = new google.maps.InfoWindow({
                        content: results[0].formatted_address
                    });

                    infowindow.open(map, marker);

                }
                else {
                    alert(status)
                }
            });
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

            //Close infowindow
            if (FocusMarker.infowindow) {
                FocusMarker.infowindow.close()
            }


            //Update closest bin info
            getClosestBin()

        }
        else {
            document.getElementById("changeLocation").innerText = "Can't find given location"
        }
    });
}

//Update closest bin info display to show closest recycling bin to current map focus
function getClosestBin() {

    //Do nothing if map doesn't have a focus or no Bins loaded
    if (!FocusMarker.getPosition() || Bins.list.length === 0) {
        return
    }


    closest = null;

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

                calcRoute()

            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    })
}

//Finds and renders route from focus location to nearest recycling bin
function calcRoute() {
    var start = new google.maps.LatLng(FocusMarker.getPosition().lat(), FocusMarker.getPosition().lng());
    var end = closest.loc;

    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };

    //Find directions
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {

            //Render result
            directionsDisplay.setDirections(result);
        }
    });
}
