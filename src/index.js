import _ from "lodash";
import "./style.css";
import callAPI from "./api";
import { createDivFromObj } from "./dom";

const search = document.getElementById("search");
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener("click", async (e) => {
	e.preventDefault();

	try {
		const weatherObj = await callAPI(search.value);
		search.value = "";
		console.log("weatherObj:", weatherObj);
		createDivFromObj(weatherObj);
	} catch (err) {
		console.log(err);
		search.value = "";
		return;
	}
});

window.addEventListener("load", async () => {
	const weatherObj = await callAPI("New York");
	createDivFromObj(weatherObj);
});
