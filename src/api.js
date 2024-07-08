import { displayErrorMessage, createDivFromObj } from "./dom";

async function callAPI(userInput) {
	//Await fetching weatherAPI
	const apiData = await fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=0086423790384089933183610241006&q=" +
			userInput +
			"&days=3&aqi=no&alerts=no",
		{ mode: "cors" }
	);

	//Store json response from API
	const response = await apiData.json();
	console.log(response);
	//display error message if there is an error
	if (response.error) {
		displayErrorMessage(response.error.message);
	}

	//Call function that creates new object
	const weatherObj = createWeatherObject(response);
	//Display the pertinent info on the DOM
	//createDivFromObj(weatherObj);
	return weatherObj;
}

//Create new object which only contains the data we want
function createWeatherObject(obj) {
	const newObj = {
		condition: obj.current.condition.text,
		fTemp: obj.current.temp_f,
		cTemp: obj.current.temp_c,
		city: obj.location.name,
		country: obj.location.country,
		icon: obj.current.condition.icon,
		uv: obj.current.uv,
		humidity: obj.current.humidity,
		rainchance: obj.forecast.forecastday[0].day.daily_chance_of_rain,
		windspeed_mile: obj.current.wind_mph,
		windspeed_km: obj.current.wind_kph,
		winddegree: obj.current.wind_degree,
		visibility_mile: obj.current.vis_miles,
		visibility_km: obj.current.vis_km,
		feelslike_f: obj.current.feelslike_f,
		feelslike_c: obj.current.feelslike_c,
		sunrise: obj.forecast.forecastday[0].astro.sunrise,
		sunset: obj.forecast.forecastday[0].astro.sunset,
		rainamount_in: obj.forecast.forecastday[0].day.totalprecip_in,
		rainamount_mm: obj.forecast.forecastday[0].day.totalprecip_mm,
		localtime: obj.location.localtime,
		forecast: obj.forecast.forecastday,
	};

	return newObj;
}

export default callAPI;
