<template>
	<!-- <v-portfolio></v-portfolio> -->
	
	<main-layout>
		<v-container fluid class="pb-5">
			<v-layout row wrap class="project-container">
				<template v-for="project in projects">
					<v-flex xs12 sm12 md6 lg6 xl4 class="pa-2">
						<v-project-card :project="project"></v-project-card>
					</v-flex>
				</template>
			</v-layout>
		</v-container>

	</main-layout>
</template>

<script>

import mainLayout from '../layouts/main-layout.vue'; 
import vProjectCard from '../components/v-project-card.vue'; 

import vPortfolio from '../components/projects/portfolio.vue'

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
		mainLayout,
		vProjectCard,
		vPortfolio
	}
}

</script>

<style lang="scss" scoped>


</style>