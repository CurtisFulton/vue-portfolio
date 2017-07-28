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
		window.addEventListener('resize', animation.resize);
	}
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