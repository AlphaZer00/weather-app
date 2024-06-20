import _ from "lodash";

const search = document.getElementById("search");
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	callAPI();
});

async function callAPI() {
	const userInput = search.value;

	const apiData = await fetch(
		"https://api.weatherapi.com/v1/current.json?key=0086423790384089933183610241006&q=" +
			userInput,
		{ mode: "cors" }
	);
	const response = await apiData.json();
	console.log(response);
	createWeatherObject(response);
}

function createWeatherObject(obj) {
	const weatherObj = {
		condition: obj.current.condition.text,
		fTemp: obj.current.temp_f,
		cTemp: obj.current.temp_c,
		city: obj.location.name,
		country: obj.location.country,
		icon: obj.current.condition.icon,
	};
	console.table(weatherObj);
	return weatherObj;
}

/* 

current: Object

cloud: 38

condition: {text: "Partly Cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png", code: 1003}

dewpoint_c: 10.5

dewpoint_f: 50.9

feelslike_c: 18.1

feelslike_f: 64.6

gust_kph: 14.7

gust_mph: 9.1

heatindex_c: 18.1

heatindex_f: 64.6

humidity: 61

is_day: 1

last_updated: "2024-06-20 18:15"

last_updated_epoch: 1718903700

precip_in: 0

precip_mm: 0

pressure_in: 30.06

pressure_mb: 1018

temp_c: 18.1

temp_f: 64.6

uv: 5

vis_km: 10

vis_miles: 6

wind_degree: 107

wind_dir: "ESE"

wind_kph: 11.9

wind_mph: 7.4

windchill_c: 18.1

windchill_f: 64.6*/
