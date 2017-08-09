<template>
	<v-main-layout>
		<v-container fluid class="project-container">
			<v-layout row wrap>
				<template v-for="project in projects">
					<v-flex xs12 sm12 md6 lg6 xl4 class="pa-2">
						<v-project-card :project="project"></v-project-card>
					</v-flex>
				</template>
			</v-layout>
		</v-container>
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

.project-container {
	padding: 1em 3em;
	padding-bottom: 2em;

	@media (max-width: $xs-break) {
		padding: 0.5em 0.4em;
	}
}

</style>