import _ from "lodash";
import callAPI from "./api";
import { createDivFromObj } from "./DOM";

const search = document.getElementById("search");
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener("click", async (e) => {
	e.preventDefault();

	const weatherObj = await callAPI(search.value).catch((err) => {
		console.error(err);
	});
	console.log("weatherObj:", weatherObj);
	createDivFromObj(weatherObj);
	search.value = "";
});
