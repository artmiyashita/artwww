jQuery(function($) {
var mapElement = document.getElementById("companyCnt");
//mapElement.style.display = "block";

});
google.maps.event.addDomListener(window, 'load', function()
{
var lat = [],
    lng = [],
    mapOptions = [],
    mapCenter = [],
    mapObj = [];

    lat[1] = 35.65300718450207,
    lng[1] = 139.74724173545837,
    lat[2] = 35.52404922365173,
    lng[2] = 139.74077761173248,
    lat[3] = 35.521263700463514,
    lng[3] = 139.73377168178558;

for(var gInt = 1; gInt < 4; gInt++) {
    mapOptions[gInt] = {
    zoom: 17,
    center: new google.maps.LatLng(lat[gInt], lng[gInt]),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
    scrollwheel: false
    }
    mapCenter[gInt] = new google.maps.LatLng(lat[gInt],lng[gInt]);
    mapObj[gInt] = new google.maps.Map(document.getElementById('map0' + gInt), mapOptions[gInt]);
}

$('#mainCompany > .btnSlide').on('click',function(){
    setTimeout( function () {
    for(var gInt = 1; gInt < 4; gInt++) {
        google.maps.event.trigger(mapObj[gInt], 'resize')
        mapObj[gInt].setCenter(mapCenter[gInt]);
        mapObj[gInt].setZoom(mapObj[gInt].getZoom());
    }
    }, 1200);
});

var request01 = {
    address: "東京都港区芝3-3-15 芝MONTビル"
},request02 = {
    address: "神奈川県川崎市川崎区塩浜2-6-11"
},request03 = {
    address: "神奈川県川崎市川崎区池上新町3-1-4"
};

var geocoder = new google.maps.Geocoder();
geocoder.geocode(request01, function(results, status)
{
    // ステータスがOKならマーカーを表示する。
    if (status == google.maps.GeocoderStatus.OK) {
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            title: request01.address,
            map: mapObj[1]
        });
    }

});
geocoder.geocode(request02, function(results, status)
{
    // ステータスがOKならマーカーを表示する。
    if (status == google.maps.GeocoderStatus.OK) {
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            title: request02.address,
            map: mapObj[2]
        });
    }
});
geocoder.geocode(request03, function(results, status)
{
    // ステータスがOKならマーカーを表示する。
    if (status == google.maps.GeocoderStatus.OK) {
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            title: request03.address,
            map: mapObj[3]
        });
    }
});
});
