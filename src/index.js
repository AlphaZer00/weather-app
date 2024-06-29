import _ from "lodash";

const search = document.getElementById("search");
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	callAPI();
	search.value = "";
});

async function callAPI() {
	//Store user input in variable
	const userInput = search.value;

	//Await fetching weatherAPI
	const apiData = await fetch(
		"https://api.weatherapi.com/v1/current.json?key=0086423790384089933183610241006&q=" +
			userInput,
		{ mode: "cors" }
	);

	//Store json response from API
	const response = await apiData.json();
	console.log(response);
	//Call function that creates new object
	const weatherObj = createWeatherObject(response);
	//Display the pertinent info on the DOM
	createDivFromObj(weatherObj);
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
	};

	return newObj;
}

//Display weather info on DOM
function createDivFromObj(obj) {
	//If div has already been created, delete it
	if (document.querySelector(".main-container")) {
		document.querySelector(".main-container").remove();
	}

	//Create elements
	const mainDiv = document.createElement("div");
	const locationDiv = document.createElement("div");
	const tempDiv = document.createElement("div");
	const conditionDiv = document.createElement("div");
	const tempToggleBtn = document.createElement("button");
	const icon = document.createElement("img");

	//Add class to elements
	mainDiv.classList.add("main-container");
	locationDiv.classList.add("location");
	tempDiv.classList.add("temperature");
	conditionDiv.classList.add("condition");
	tempToggleBtn.classList.add("temp-toggle-btn");
	icon.classList.add("icon");

	//Set div text to information from obj
	locationDiv.textContent = `${obj.city}, ${obj.country}`;
	tempDiv.textContent = `${obj.fTemp}°F`;
	conditionDiv.textContent = `${obj.condition}`;
	tempToggleBtn.textContent = "F/C";
	icon.src = "https:" + obj.icon;

	//Append elements
	mainDiv.append(locationDiv, icon, tempDiv, conditionDiv, tempToggleBtn);
	document.body.append(mainDiv);

	//Unit toggle function
	handleToggleBtn(obj);
}

function handleToggleBtn(obj) {
	const toggleBtn = document.querySelector(".temp-toggle-btn");
	let isFaren = true;

	toggleBtn.addEventListener("click", toggleUnit);

	function toggleUnit() {
		const tempDiv = document.querySelector(".temperature");
		if (isFaren) {
			tempDiv.textContent = obj.cTemp + "°C";
			isFaren = false;
		} else {
			tempDiv.textContent = obj.fTemp + "°F";
			isFaren = true;
		}
	}
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
