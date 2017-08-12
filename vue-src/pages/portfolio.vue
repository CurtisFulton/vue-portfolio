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
					description: "A VueJS website built to allow me to show off any projects I work on. The design was meant to be simple/minimalistic so that all the content is easy to see and find at a glance. VuetifyJS, which is a materal design component framework, was used to aid in the UI design.",
					img: "./images/portfolio.jpg",
					projectUrl: 'portfolio',
					liveURL: "http://www.curtisfulton.me"
				},
				{
					title: "North Force Landscaping",
					description: "This website was made for a small family company in North Brisbane called North Force Landscaping. Due to it being my first website, the technologies used were kept to a minimum, so HTML, Sass and FlexBox Grid were the main things used.",
					img: "./images/north-force.jpg",
					projectUrl: 'north-force',
					liveURL: "http://www.northforcelandscaping.com.au"
				},
				{
					title: "Poll Site",
					description: "This Poll site was made as a clone of StrawPoll.me. It allows users to create a poll and vote without having make an account. The focus of this website was to learn basic back-end development, and so the server is running on NodeJS",
					img: "./images/poll.jpg",
					projectUrl: 'poll',
					disableLiveLink: true
				},
				{
					title: "Blog",
					description: "Work In Progress",
					img: "",
					projectUrl: 'blog',
					disableLiveLink: true
				},
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