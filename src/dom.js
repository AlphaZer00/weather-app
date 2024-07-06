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

export { handleToggleBtn, displayErrorMessage, createDivFromObj };
