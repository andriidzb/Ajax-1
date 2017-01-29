$.ajax({

url: `https://api.darksky.net/forecast/3e468a0e8dacc0951b2da8517e0c01cd/49.844017,24.026212`,

dataType: 'jsonp'

}).done(function(data) {

var tempF = data.currently.temperature;

var tempC = Math.round((tempF - 32) * 5/9);

var date = new Date(data.currently.time * 1000);

$('#about')[0].innerText = date + " temperature today: " + tempC + " °C";

$('#right').attr("disabled","disabled");

});

var currentDate = new Date;

var newDate = Date.parse(currentDate) / 1000;

$('#left').on('click', function() {
	newDate -= 24 * 60 * 60;

	$.ajax({

    url: `https://api.darksky.net/forecast/3e468a0e8dacc0951b2da8517e0c01cd/49.844017,24.026212, ${newDate}`,

    dataType: 'jsonp'

	}).done(function(data) {

		var tempF = data.currently.temperature;

    var tempC = Math.round((tempF - 32) * 5/9);

    var date = new Date(data.currently.time * 1000);

		$('#about')[0].innerText = date + " temperature: " + tempC + " °C";

		$('#right').removeAttr("disabled");

		console.log(data);

  })
});


$('#right').on('click', function() {
	newDate += 24 * 60 * 60;

	$.ajax({

    url: `https://api.darksky.net/forecast/3e468a0e8dacc0951b2da8517e0c01cd/49.844017,24.026212, ${newDate}`,

    dataType: 'jsonp'

	}).done(function(data) {

		var tempF = data.currently.temperature;

    var tempC = Math.round((tempF - 32) * 5/9);

    var date = new Date(data.currently.time * 1000);

    console.log(data);

		$('#about')[0].innerText = date + " temperature: " + tempC + " °C";

		if(date > currentDate) {
			$('#right').attr("disabled","disabled");
		}

  })
});


