var acc = document.getElementsByClassName("accordion");
var i;
var coords = [29.801902, -95.365821];
var ocoords = [29.801902, -95.365821];
var ncoords = [29.801902, -95.365821];
var scoords = [29.801902, -95.365821];


var mymap = L.map('mapid').setView(coords, 17);

var events = 
[{"Offense":"Theft","Time_Begun":1470035400000,"Premise_Type":"Government or Public Buil","Address_Range":"5400-5499 PARDEE","Zip_Code":"77026","HPD_Division":"Northeast Division","HPD_District":"7","HPD_Beat":"7C20","Council_District":"B","SNB_Name":"KASHMERE GARDENS","SNB_No":52,"x":-10610612.278225783,"y":3478630.8323252071},{"Offense":"Auto Theft","Time_Begun":1471160760000,"Premise_Type":"Residence or House","Address_Range":"1900-1999 RUNNELS","Zip_Code":"77003","HPD_Division":"South Central Division","HPD_District":"10","HPD_Beat":"10H10","Council_District":"H","SNB_Name":"SECOND WARD","SNB_No":63,"x":-10614230.866568578,"y":3472918.8867602237},{"Offense":"Burglary","Time_Begun":1470689040000,"Premise_Type":"Residence or House","Address_Range":"2700-2799 GREGG","Zip_Code":"77026","HPD_Division":"Northeast Division","HPD_District":"7","HPD_Beat":"7C20","Council_District":"B","SNB_Name":"GREATER FIFTH WARD","SNB_No":55,"x":-10612739.416203827,"y":3476221.4946765029},{"Offense":"Theft","Time_Begun":1470527760000,"Premise_Type":"Driveway","Address_Range":"2000-2099 SINGLETON","Zip_Code":"77008","HPD_Division":"Central Division","HPD_District":"2","HPD_Beat":"2A30","Council_District":"C","SNB_Name":"GREATER HEIGHTS","SNB_No":15,"x":-10618795.888334667,"y":3478485.404603018},{"Offense":"Theft","Time_Begun":1470079200000,"Premise_Type":"Road, Street, or Sidewalk","Address_Range":"2400-2499 WASHINGTON","Zip_Code":"77007","HPD_Division":"Central Division","HPD_District":"2","HPD_Beat":"2A40","Council_District":"H","SNB_Name":"WASHINGTON AVENUE COALITION / MEMORIAL PARK","SNB_No":22,"x":-10617973.800246323,"y":3473803.8407574724},{"Offense":"Theft","Time_Begun":1471854000000,"Premise_Type":"Grocery Store or Supermar","Address_Range":"1000-1099 QUITMAN","Zip_Code":"77009","HPD_Division":"Central Division","HPD_District":"2","HPD_Beat":"2A10","Council_District":"H","SNB_Name":"NEAR NORTHSIDE","SNB_No":51,"x":-10615491.270022271,"y":3475555.769585913},{"Offense":"Theft","Time_Begun":1472313720000,"Premise_Type":"Department or Discount St","Address_Range":"4400-4499 NORTH ","Zip_Code":"77022","HPD_Division":"North Division","HPD_District":"3","HPD_Beat":"3B50","Council_District":"H","SNB_Name":"NORTHSIDE/NORTHLINE","SNB_No":45,"x":-10617745.043537876,"y":3481585.5107392455},{"Offense":"Theft","Time_Begun":1471116780000,"Premise_Type":"Residence or House","Address_Range":"2100-2199 SUMMER","Zip_Code":"77007","HPD_Division":"Central Division","HPD_District":"2","HPD_Beat":"2A40","Council_District":"H","SNB_Name":"WASHINGTON AVENUE COALITION / MEMORIAL PARK","SNB_No":22,"x":-10617580.034751112,"y":3474394.850499325}];



var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(mymap);
var marker = L.marker(coords).addTo(mymap);
coords[0] = coords[0] + .001;
coords[1] = coords[1] + .001;
var marker = L.marker(coords).addTo(mymap);

/*
L.CRS.EPSG3857.unproject = function (point) { // Point -> LatLng
  var earthRadius = 6378137;
      projectionPoint = L.point(point).divideBy(earthRadius);

  return this.projection.unproject(projectionPoint);
};
*/

 for(i = 0; i < events.length; i++) {
     console.log("events.y", events[i].y); 
     console.log("events.x", events[i].x); 	
     ocoords[0] = events[i].x;
     ocoords[1] = events[i].y;
     console.log("ocoords",ocoords);
     
     var point = new L.Point(events[i].x, events[i].y);
     console.log("point",point);
     
     var earthRadius = 6378137;
     var latlng = L.Projection.SphericalMercator.unproject(
               point);  //.divideBy(earthRadius));
     console.log("latlng",latlng); //returns latlon
     new L.Marker([latlng.lat, latlng.lng], {bounceOnAdd: true}).addTo(mymap);
    
    };



/*	var events = JSON.parse(raw); */
	alert(events[0].Offense);
	alert(events[1].Offense);

/*
for (i = 0; i < acc.length; i++) {
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
