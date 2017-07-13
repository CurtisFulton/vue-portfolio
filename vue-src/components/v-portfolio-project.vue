<template>
	<article class="portfolio-project">
		<h5>{{ project.name }}</h5>
	</article>
</template>

<script>

export default {
	name: "v-home-ui",
	data: function() {
		return {

		}
	},
	props: ['project']
}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.portfolio-project {
	margin-top: 2em;
	box-sizing: content-box;
	text-align: center;


	background-color: rgba($content-highlight, 0.5);
}

</style>