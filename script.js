const map = L.map("map").setView(
    [8.30223, 125.00075], 14);
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19}
).addTo(map);

const marker = L.marker([8.30223, 125.00075])
    .addTo(map);

marker.bindPopup( "<b>Impasugong Municipal Hall</b><p>Welcome to Impasugong, Bukidnon!</p>");

L.circle([8.30223, 125.00075], {
    color: "blue",
    fillColor: "#ff0b0b",
    fillOpacity: 0.3,
    radius: 500
}).addTo(map);

map.on("click", function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

L.popup().setLatLng(event.latlng).setContent("<b>Selected Location</b><br>" + "Latitude: " + lat.toFixed(5) +"<br>Longitude: " + lng.toFixed(5))
        .openOn(map);
});

const locations = [
    { name: "Impasugong Municipal Hall", lat: 8.30223, lng: 125.00075},
    {name: "Impasugong Central Elementary School",lat: 8.30674,lng: 125.00161},
    {name: "Impasugong National High School",lat: 8.30110,lng: 124.99628}
];

locations.forEach(function(place) {
    L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup("<b>" + place.name + "</b>");
});