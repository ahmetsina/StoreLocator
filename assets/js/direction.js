/**
 * Created by ahmetsina on 01/03/2017.
 */
$.getJSON('https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyBEZ4TrnWJKQqEvaFaDwHKQ8e9eOjgDHYc', function (data) {
    console.log(data.routes);
});