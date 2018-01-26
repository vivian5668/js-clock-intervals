


 var hourhand = document.getElementById("hour")
 var minutehand = document.getElementById("minute")
 var secondhand = document.getElementById("second")


 var now = new Date();

 var iniHour = now.getHours() % 12;
 var iniMinute = now.getMinutes();
 var iniSecond = now.getSeconds();



var secondRotation = function (s) {
	return s * 360 / 60; 
}

var minuteRotation = function (m) {
	return m * 360 / 60; 
}

var hourRotation = function (h) {
	return h * 360 / 12;
}

var iniHDegrees = hourRotation(iniHour);
var iniMDegrees = minuteRotation(iniMinute);
var iniSDegrees = secondRotation(iniSecond); 

var setInitial = function () {
	 hourhand.style.transform = "rotate(" + iniHDegrees + "deg)";
	 minutehand.style.transform = "rotate(" + iniMDegrees + "deg)";
	 secondhand.style.transform = "rotate(" + iniSDegrees + "deg)";
};

setInitial();

var hdegrees = 30 / 3600;
var mdegrees = 6 / 60.0;
var sdegrees = 6;
var count = 0;

var myInterval = setInterval(function() {
 	 	 hourhand.style.transform = "rotate(" + (iniHDegrees + count * hdegrees) + "deg)";
		 minutehand.style.transform = "rotate(" + (iniMDegrees + count * mdegrees) + "deg)";
		 secondhand.style.transform = "rotate(" + (iniSDegrees + count * sdegrees) + "deg)";
		 
		 if (count > 60 ) {
		 	now = new Date();
		     iniHour = now.getHours() % 12;
			 iniMinute = now.getMinutes();
			 iniSecond = now.getSeconds();

			iniHDegrees = hourRotation(iniHour);
			iniMDegrees = minuteRotation(iniMinute);
			iniSDegrees = secondRotation(iniSecond); 


			 count = 0;
		 } 
		 count += 1;
	
 }, 1000);



myInterval;




