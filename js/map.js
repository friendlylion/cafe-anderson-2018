function initMap() {
  var point = {lat: 55.783331, lng: 37.631946};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: point
  });
  var marker = new google.maps.Marker({
    position: point,
    map: map
  });
}
