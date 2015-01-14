var container = document.getElementById('venue-google-map');
var address = container.getAttribute('data-address');
var url = container.getAttribute('data-url');
var info_window = container.getAttribute('data-info-window');
var geocoder = new google.maps.Geocoder();
var options =
{
  disableDefaultUI: true,
  disableDoubleClickZoom: true,
  draggable: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scrollwheel: false,
  zoom: 15
};

geocoder.geocode({address: address}, function(results, status)
{
  if (status == google.maps.GeocoderStatus.OK)
  {
    var map = new google.maps.Map(container, options);
    var marker = new google.maps.Marker({map: map, position: results[0].geometry.location, title: address});

    map.setCenter(new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng()));

    google.maps.event.addDomListener(container, 'click', function() { window.open(url, '_self'); });

    container.style.display = 'block';
  }
});
