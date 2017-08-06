<template>
	<section>
		<canvas id="background-animation"></canvas>
		<div id="content">
			<slot></slot>
		</div>
	</section>
</template>

<script>
import animation from "../javascripts/background-animation.js";

export default {
	name: "v-abstract-background",
	data: function() {
		return {

		}
	},
	mounted: function() {
		animation.initialize();
		window.addEventListener('resize', resizeDebounce(animation.resize, 250, false));
	}
}

function resizeDebounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
</script>

<style lang="scss" scoped>
	canvas {
		display: block;
		position: absolute;
		background-image: linear-gradient(to bottom right, #D5D5D5 0%, #FFFFFF 100%);
		z-index: -1;
	}

	#content {
		z-index: 1;
		width: 100%;
		height: 100vh;
	}
	
</style>