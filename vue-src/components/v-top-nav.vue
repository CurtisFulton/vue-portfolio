<template>
	<v-toolbar fixed flat class="top-bar">
		<v-toolbar-items>
			<v-btn to="/" flat class="top-bar-item">Home</v-btn>
			<v-btn to="/about" flat class="top-bar-item">About Me</v-btn>
			<v-btn to="/portfolio" flat exact class="top-bar-item">Portfolio</v-btn>
			<v-btn to="/blog" flat class="top-bar-item">Blog</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>

	export default {
		name: "v-top-nav",
		data: function() {
			return {

			}
		}
	}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.top-bar {
	height: $header-height;
	display: flex;
	justify-content: center;

	background-color: $paper;
}

.top-bar-item {
	color: inherit;

	@media (max-width: 400px) {
		font-size: 0.85em;
		width: 3em;
	}
}

</style>