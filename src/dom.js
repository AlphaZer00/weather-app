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

function displayErrorMessage(error) {
	const errorMsg = document.querySelector(".error-message");
	errorMsg.textContent = error;
}

//Display weather info on DOM
function createDivFromObj(obj) {
	//If div has already been created, delete it
	if (document.querySelector(".main-container")) {
		document.querySelector(".main-container").remove();
	}

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
	const windText = document.createElement("span");
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

	const unitToggleBtn = document.createElement("button");

	//Add class to elements
	mainDiv.classList.add("main-container");
	titleDiv.classList.add("title-area");
	locationSpan.classList.add("location");
	timeSpan.classList.add("time");
	conditionAreaDiv.classList.add("condition-area");
	tempDiv.classList.add("temperature");
	conditionDiv.classList.add("condition");
	unitToggleBtn.classList.add("temp-toggle-btn");
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
	timeSpan.textContent = `${obj.localtime}`;
	tempDiv.textContent = `${obj.fTemp}°F`;
	conditionDiv.textContent = `${obj.condition}`;
	unitToggleBtn.textContent = "Toggle Units";
	icon.src = "https:" + obj.icon;
	humidityText.textContent = "Humidity";
	humidityData.textContent = `${obj.humidity}%`;
	uvText.textContent = "UV Index";
	uvData.textContent = `${obj.uv}`;
	windText.textContent = "Wind";
	windData.textContent = `${obj.windspeed_mile} mph`;
	sunriseText.textContent = "Sunrise";
	sunriseData.textContent = `${obj.sunrise}`;
	sunsetText.textContent = "Sunset";
	sunsetData.textContent = `${obj.sunset}`;
	rainChanceText.textContent = "Chance of Rain";
	rainChanceData.textContent = `${obj.rainchance}%`;
	visibilityText.textContent = "Visibility";
	visibilityData.textContent = `${obj.visibility_mile}`;
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
	windBox.append(windText, windData);
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
	mainDiv.append(titleDiv, conditionAreaDiv, gridContainer, unitToggleBtn);
	document.body.append(mainDiv);

	//Unit toggle function
	handleToggleBtn(obj);
}

export { handleToggleBtn, displayErrorMessage, createDivFromObj };
