var acc = document.getElementsByClassName("accordion");
var i;
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
 {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>
     contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
      Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

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