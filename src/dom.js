import arrow from "./assets/arrow_upward.png";
import { format } from "date-fns";

function handleToggleBtn(obj) {
	const toggleBtn = document.querySelector(".toggle-btn");
	let isFreedomUnit = true;

	toggleBtn.addEventListener("click", toggleUnit);

	function toggleUnit() {
		const tempDiv = document.querySelector(".temperature");
		const feelslike = document.querySelector(".feelslike-data");
		const wind = document.querySelector(".wind-data");
		const rainamount = document.querySelector(".rainamount-data");
		const visibility = document.querySelector(".visibility-data");

		if (isFreedomUnit) {
			tempDiv.textContent = obj.cTemp + "°C";
			feelslike.textContent = obj.feelslike_c + "°C";
			wind.textContent = obj.windspeed_km + "kmph";
			rainamount.textContent = obj.rainamount_mm + "mm";
			visibility.textContent = obj.visibility_km + "km";
			isFreedomUnit = false;
		} else {
			tempDiv.textContent = obj.fTemp + "°F";
			feelslike.textContent = obj.feelslike_f + "°F";
			wind.textContent = obj.windspeed_mile + "mph";
			rainamount.textContent = obj.rainamount_in + "in";
			visibility.textContent = obj.visibility_mile + "mi";
			isFreedomUnit = true;
		}
	}
}

function displayErrorMessage(error) {
	const errorMsg = document.querySelector(".error-message");
	errorMsg.textContent = error;
}

function resetErrorMessage() {
	const errorMsg = document.querySelector(".error-message");
	errorMsg.textContent = "";
}

//Display weather info on DOM
function createDivFromObj(obj) {
	//If div has already been created, delete it
	if (document.querySelector(".main-container")) {
		document.querySelector(".main-container").remove();
	}

	resetErrorMessage();

	//Create elements
	const mainDiv = document.createElement("div");
	const titleDiv = document.createElement("div");
	const locationSpan = document.createElement("span");
	const timeSpan = document.createElement("span");
	const conditionAreaDiv = document.createElement("div");
	const icon = document.createElement("img");
	const tempDiv = document.createElement("div");
	const conditionDiv = document.createElement("div");
	const gridContainer = document.createElement("div");
	const humidityBox = document.createElement("div");
	const humidityText = document.createElement("span");
	const humidityData = document.createElement("span");
	const uvBox = document.createElement("div");
	const uvText = document.createElement("span");
	const uvData = document.createElement("span");
	const windBox = document.createElement("div");
	const windContainer = document.createElement("div");
	const windText = document.createElement("span");
	const windArrow = document.createElement("img");
	const windData = document.createElement("span");
	const sunriseBox = document.createElement("div");
	const sunriseText = document.createElement("span");
	const sunriseData = document.createElement("span");
	const sunsetBox = document.createElement("div");
	const sunsetText = document.createElement("span");
	const sunsetData = document.createElement("span");
	const rainChanceBox = document.createElement("div");
	const rainChanceText = document.createElement("span");
	const rainChanceData = document.createElement("span");
	const visibilityBox = document.createElement("div");
	const visibilityText = document.createElement("span");
	const visibilityData = document.createElement("span");
	const rainAmountBox = document.createElement("div");
	const rainAmountText = document.createElement("span");
	const rainAmountData = document.createElement("span");
	const feelslikeBox = document.createElement("div");
	const feelslikeText = document.createElement("span");
	const feelslikeData = document.createElement("span");

	//Add class to elements
	mainDiv.classList.add("main-container");
	titleDiv.classList.add("title-area");
	locationSpan.classList.add("location");
	timeSpan.classList.add("time");
	conditionAreaDiv.classList.add("condition-area");
	tempDiv.classList.add("temperature");
	conditionDiv.classList.add("condition");
	icon.classList.add("icon");
	gridContainer.classList.add("grid-container");
	humidityBox.classList.add("humidity-box");
	humidityText.classList.add("humidity-text");
	humidityData.classList.add("humidity-data");
	uvBox.classList.add("uv-box");
	uvText.classList.add("uv-text");
	uvData.classList.add("uv-data");
	windBox.classList.add("wind-box");
	windText.classList.add("wind-text");
	windContainer.classList.add("wind-container");
	windArrow.classList.add("wind-arrow");
	windData.classList.add("wind-data");
	sunriseBox.classList.add("sunrise-box");
	sunriseText.classList.add("sunrise-text");
	sunriseData.classList.add("sunrise-data");
	sunsetBox.classList.add("sunset-box");
	sunsetText.classList.add("sunset-text");
	sunsetData.classList.add("sunset-data");
	rainChanceBox.classList.add("rainchance-box");
	rainChanceText.classList.add("rainchance-text");
	rainChanceData.classList.add("rainchance-data");
	visibilityBox.classList.add("visibility-box");
	visibilityText.classList.add("visibility-text");
	visibilityData.classList.add("visibility-data");
	rainAmountBox.classList.add("rainamount-box");
	rainAmountText.classList.add("rainamount-text");
	rainAmountData.classList.add("rainamount-data");
	feelslikeBox.classList.add("feelslike-box");
	feelslikeText.classList.add("feelslike-text");
	feelslikeData.classList.add("feelslike-data");

	//Set div text to information from obj
	locationSpan.textContent = `${obj.city}, ${obj.country}`;
	timeSpan.textContent = format(obj.localtime, "EEE | MMMM d yyyy | h:mm aa");
	tempDiv.textContent = `${obj.fTemp}°F`;
	conditionDiv.textContent = `${obj.condition}`;
	icon.src = "https:" + obj.icon;
	humidityText.textContent = "Humidity";
	humidityData.textContent = `${obj.humidity}%`;
	uvText.textContent = "UV Index";
	uvData.textContent = `${obj.uv}`;
	windText.textContent = "Wind";
	windArrow.src = arrow;
	windArrow.style = `transform: rotate(${obj.winddegree + 180}deg); width: 1.5rem`;
	windData.textContent = `${obj.windspeed_mile} mph`;
	sunriseText.textContent = "Sunrise";
	sunriseData.textContent = `${obj.sunrise}`;
	sunsetText.textContent = "Sunset";
	sunsetData.textContent = `${obj.sunset}`;
	rainChanceText.textContent = "Chance of Rain";
	rainChanceData.textContent = `${obj.rainchance}%`;
	visibilityText.textContent = "Visibility";
	visibilityData.textContent = `${obj.visibility_mile}mi`;
	rainAmountText.textContent = "Rain Amount";
	rainAmountData.textContent = `${obj.rainamount_in}in`;
	feelslikeText.textContent = "Feels Like";
	feelslikeData.textContent = `${obj.feelslike_f}°F`;

	//Append elements
	feelslikeBox.append(feelslikeText, feelslikeData);
	rainAmountBox.append(rainAmountText, rainAmountData);
	visibilityBox.append(visibilityText, visibilityData);
	rainChanceBox.append(rainChanceText, rainChanceData);
	sunsetBox.append(sunsetText, sunsetData);
	sunriseBox.append(sunriseText, sunriseData);
	windContainer.append(windArrow, windData);
	windBox.append(windText, windContainer);
	uvBox.append(uvText, uvData);
	humidityBox.append(humidityText, humidityData);
	gridContainer.append(
		feelslikeBox,
		windBox,
		uvBox,
		rainChanceBox,
		rainAmountBox,
		humidityBox,
		visibilityBox,
		sunriseBox,
		sunsetBox
	);
	titleDiv.append(locationSpan, timeSpan);
	conditionAreaDiv.append(icon, tempDiv, conditionDiv);
	mainDiv.append(titleDiv, conditionAreaDiv, gridContainer);
	document.body.append(mainDiv);

	//Unit toggle function
	handleToggleBtn(obj);
}

export { displayErrorMessage, createDivFromObj };
