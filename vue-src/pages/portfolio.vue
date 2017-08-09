<template>
	<v-main-layout>
		<v-layout row wrap class="project-gallery">
			<template v-for="project in projects">
				<v-flex xs12 md12 lg6 xl4 class="project-container">
					<v-project-card :project="project"></v-project-card>
				</v-flex>
			</template>
		</v-layout>
	</v-main-layout>
</template>

<script>

import vMainLayout from '../layouts/main-layout.vue'; 
import vProjectCard from '../components/v-project-card.vue'; 

import vNorthForce from '../components/projects/north-force.vue'

export default {
	name: "v-home",
	data: function() {
		return {
			projects: [
				{
					title: "Portfolio Website",
					description: "This portfolio website built using VueJS",
					img: "./images/portfolio.jpg",
					projectUrl: 'portfolio',
					liveURL: "http://www.curtisfulton.me"
				},
				{
					title: "North Force Landscaping",
					description: "North Force website made using Flex Box Grid",
					img: "./images/north-force.jpg",
					projectUrl: 'north-force',
					liveURL: "http://www.northforcelandscaping.com.au"
				},
				{
					title: "Poll Site",
					description: "A Basic CSS/HTML polling site",
					img: "./images/poll.jpg",
					projectUrl: 'poll',
					disableLiveLink: true
				}
			]
		}
	},
	components: {
		vMainLayout,
		vProjectCard,
		vNorthForce
	}
}

</script>

<style lang="scss" scoped>

@import '../sass/_variables';

.project-gallery {
	display: flex;
	align-content: flex-start; 

	padding: 1em 3em;

	@media (max-width: $xs-break) {
		padding: 0.5em 0.4em;
	}

	@media (max-width: 1424px) {
		justify-content: space-around;
	}
}

.project-container.project-container {
	padding-right: 1em;
	padding-left: 1em;
	padding-bottom: 2em;

	@media (max-width: 1424px) {
		padding-right: 5%;
		padding-left: 5%;
	}

	@media (max-width: $sm-break) {
		padding-right: 0.5em;
		padding-top: 1em;
		padding-bottom: 1em;
	}
}

</style>