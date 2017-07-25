<template>
	<article class="project-container col s12 m4">
		<div v-on:click="" class="portfolio-project z-depth-2">
			<img class="project-image" :src="project.img">
			<div class="project-details">
				<h6 class="project-title">{{ project.name }}</h6>

				<div class="project-summary">
					<p>{{ project.summary }}</p>
				</div>
			</div>
		</div>
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

.project-container {
	margin: 1em 0;
}

.portfolio-project {
	height: 100%;
	width: 100%;
	overflow: hidden;

	padding: 0;
	background-color: $dusty;
	position: relative;

	img {
		position: absolute;
	    top: 50%;
	    left: 50%;

	    width: auto;
	    height: 100%;

	    transform: translate(-50%, -50%);
	}

	.project-details {
		text-align: left;
		padding-left: 1em;
		padding-right: 1em;
		background-color: white;
		width: 100%;
		bottom: 0px;
		position: absolute;
		height: 3em;
		transition: all 0.6s ease-in-out;

		overflow: hidden;

		.project-title {
			transition: all 0.4s ease-in;
			font-size: 1.3em;
			padding: 0;
			height: 50%;
			width: 100%;
		}

		&:hover {
			height: 100%;

			.project-summary {
				display: block;
			}
		}
	}

	.project-summary {
		margin: 0;
		transition: all 0.4s ease-in;
		display: block;
		font-size: 1em;
	}
}

</style>