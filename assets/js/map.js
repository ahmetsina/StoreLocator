var map;
var json;
$.getJSON('data.json',function (data) {
    window.json = data;
});

function initMap() {
    map = new google.maps.Map(document.getElementById("map"),{
        center: { lat:-34.397, lng:150.644},
        zoom:7,
        mapTypeControl: false,
        streetViewControl: false
    });

    getCurrentLocation();

    var stores = window.json.stores;
    console.log(stores.length);
    console.log(stores);
    for(var i = 0; i < stores.length; i++) {

        var storeLat = parseFloat(stores[i].location.lat);
        var storeLng = parseFloat(stores[i].location.lng);
        var marker = new google.maps.Marker({
            position: {
                lat : storeLat,
                lng : storeLng
            },
            map: map
        });

        attachInfoToMarker(marker, stores[i].title)

    }

}

function getCurrentLocation() {
    var infoWindow = new google.maps.InfoWindow({map: map});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function attachInfoToMarker(marker, Info){
    var infoWindow = new google.maps.InfoWindow({
        content: Info
    });

    marker.addListener('click', function () {
        infoWindow.open(marker.get('map'), marker);
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}