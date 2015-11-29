<html>
  <head>
    <title> Cape Town Map </title>
    <style type="text/css">
      html, body { height: 100%; margin: 0; padding: 0; }
      #map { height: 100%; }
    </style>


  </head>
  <body>
    <div id="map"></div>
    <script type="text/javascript">
var map;
function initMap() {
  var table = {lat: -33.9573, lng: 18.4031};
  var boulder = {lat: -34.1414566, lng: 18.4306299};
  var muizenberg = {lat: -34.1095705, lng: 18.4679639};
  var robben = {lat: -33.8067, lng: 18.3662};
  var cape = {lat: -34.3586894, lng: 18.4753499};
  map = new google.maps.Map(document.getElementById('map'), {
  //  center: {lat: 28.578031, lng: -81.351116},
  center: table,
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.HYBRID
    //keep adding things here to change the map
  });
  var marker = new google.maps.Marker({
    position: table,
    map: map,
    title: 'Table Mountain'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  var marker2 = new google.maps.Marker({
    position: boulder,
    map: map,
    title: 'Boulders Beach'
  });
  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
  var marker3 = new google.maps.Marker({
    position: muizenberg,
    map: map,
    title: 'Muizenberg'
  });
  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });
  var marker4 = new google.maps.Marker({
    position: robben,
    map: map,
    title: 'Robben Island'
  });
  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });
  var marker5 = new google.maps.Marker({
    position: cape,
    map: map,
    title: 'Cape of Good Hope'
  });
  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });
  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">University of North Carolina</h1>'+
        '<div id="bodyContent">'+
        '<iframe src="https://en.wikipedia.org/wiki/University_of_North_Carolina_at_Chapel_Hill"></iframe>'+
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var contentBoulder = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">NC State University</h1>'+
          '<div id="bodyContent">'+
          '<iframe src="https://en.wikipedia.org/wiki/North_Carolina_State_University"></iframe>'+
          '</div>'+
          '</div>';
      var infowindow2 = new google.maps.InfoWindow({
        content: contentBoulder
      });
      var contentMuizenberg = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Duke University</h1>'+
            '<div id="bodyContent">'+
            '<iframe src="https://en.wikipedia.org/wiki/Duke"></iframe>'+
            '</div>'+
            '</div>';
        var infowindow3 = new google.maps.InfoWindow({
          content: contentMuizenberg
        });
        var contentRobben = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Duke University</h1>'+
              '<div id="bodyContent">'+
              '<iframe src="https://en.wikipedia.org/wiki/Duke"></iframe>'+
              '</div>'+
              '</div>';
          var infowindow4 = new google.maps.InfoWindow({
            content: contentRobben
          });
          var contentCape = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Duke University</h1>'+
                '<div id="bodyContent">'+
                '<iframe src="https://en.wikipedia.org/wiki/Duke"></iframe>'+
                '</div>'+
                '</div>';
            var infowindow5 = new google.maps.InfoWindow({
              content: contentCape
            });
    </script>
    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACtrqz2ClbRS_Xw8BKUxTMh8AkBdix95M&callback=initMap">
      //put key where it says "YOUR_KEY_HERE" in code
    </script>
  </body>
</html>
