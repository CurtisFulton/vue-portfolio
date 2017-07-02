// VueJS file for the abstact background

import animation from "../javascripts/background-animation.js";

export default {
	name: "v-abstract-background",
	data: function() {
		return {

		}
	},
	mounted: function() {
		animation.initialize();
		window.addEventListener('resize', animation.resize);
	}
}