import $ from 'jquery';

var fetchWeather = function(){
	console.log("Fetch weather action in progress...")
	const weatherURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d"
	const thePromise = $.getJSON(weatherURL)
	// $.getJSON(weatherURL, (weatherData)=>{
	console.log(thePromise);
	return {
		type: "GET_WEATHER",
		payload: thePromise
	}
		
	// });
}

export default fetchWeather;