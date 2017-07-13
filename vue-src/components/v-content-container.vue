<template>
	<section class="content-container z-depth-2">
		<slot></slot>
	</section>
</template>

<script>

	export default {
		name: "v-home-ui",
		data: function() {
			return {

			}
		}
	}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.content-container {
	background-color: $content-background-color;
	width: 100%;
	height: 100%;
	
	overflow-y: auto;
	overflow-x: hidden;
}

</style>