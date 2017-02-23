var map;
var json = JSON.parse('data.json');
function initMap() {


    map = new google.maps.Map(document.getElementById("map"),{
        center: { lat:-34.397, lng:150.644},
        zoom:10
    });
    console.log(json.stores);


}