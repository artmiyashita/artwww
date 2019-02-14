$(function(){
  var myLatlng = new google.maps.LatLng(35.65300718450207,1139.74724173545837);
  var myOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map01"), myOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map
  });
});