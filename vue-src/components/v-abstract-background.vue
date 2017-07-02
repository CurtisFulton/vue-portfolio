<template>
	<section>
		<canvas id="home-animation"></canvas>
		<div id="home-content">
			<slot></slot>
		</div>
	</section>
</template>

<script src="../javascripts/abstract-background.js"></script>

<style lang="scss" scoped>
	canvas {
		display: block;
		position: absolute;
		background-image: linear-gradient(to bottom right, #D5D5D5 0%, #FFFFFF 100%);
		z-index: -1;
	}

	div {
		z-index: 1;
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>