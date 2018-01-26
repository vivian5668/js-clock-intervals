 var hourhand = document.getElementById("hour")
 var minutehand = document.getElementById("minute")
 var secondhand = document.getElementById("second")


 var now = new Date();
 var hour = now.getHours();
 var minute = now.getMinutes();
 var second = now.getSeconds();



var secondRotation = function (s) {
	return s * 360 / 60; 
}

var minuteRotation = function (m) {
	return m * 360 / 60; 
}

var hourRotation = function (h) {
	return h * 360 / 12;
}

var hdegrees = secondRotation(hour);
var mdegrees = minuteRotation(minute);
var sdegrees = hourRotation(second); 


setInterval(function() {
 	 hourhand.style.transform = "rotate(" + hdegrees + "deg)";
	 minutehand.style.transform = "rotate(" + mdegrees + "deg)";
	 secondhand.style.transform = "rotate(" + sdegrees + "deg)";
	 console.log("tick");
 }, 1000);




