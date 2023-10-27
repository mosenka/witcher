import * as flsFunctions from "./vendor/functions.js";
import { teamSlider, gallery, map, privacy, form} from '../blocks/sections/sections.js'
import { textInput, dropDown } from '../blocks/components/components.js'


flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {

	teamSlider();
	gallery();
	map();
	privacy();
	textInput();
	dropDown();
	form();

	// export const body = document.querySelector("body");

	function testWebP(callback) {
		var webP = new Image();

		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};

		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}


	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		}else{
			document.querySelector('body').classList.add('no-webp');
		}
	});




});




