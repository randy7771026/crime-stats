var acc = document.getElementsByClassName("accordion");
var i;
var coords = [29.801902, -95.365821];
var ocoords = [29.801902, -95.365821];
var ncoords = [29.801902, -95.365821];
var scoords = [29.801902, -95.365821];
var events = [];


var mymap = L.map('mapid').setView(coords, 17);




var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(mymap);


/*
L.CRS.EPSG3857.unproject = function (point){ // Point -> LatLng
  var earthRadius = 6378137;
      projectionPoint = L.point(point).divideBy(earthRadius);

  return this.projection.unproject(projectionPoint);
};
*/

var events = data; //   JSON.parse(data)


 for(i = 0; i < events.length; i++){
    console.log("events[", i,"] ", events[i],"x", events[i].geometry.x); 
     ocoords[0] = events[i].geometry.x;
     ocoords[1] = events[i].geometry.y;
     console.log("ocoords",ocoords);
     
     var point = new L.Point(events[i].geometry.x, events[i].geometry.y);
     console.log("point",point);
     
     var earthRadius = 6378137;
     var latlng = L.Projection.SphericalMercator.unproject(
               point);  //.divideBy(earthRadius));
     console.log("latlng",latlng); //returns latlon
     new L.Marker([latlng.lat, latlng.lng],{bounceOnAdd: true}).addTo(mymap);
    
    };


/*	var events = JSON.parse(raw); 
	alert(events[0].Offense);
	alert(events[1].Offense);


for (i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
    	  
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()
document.write(" ",month,"/",day,"/",year," ")
*/
