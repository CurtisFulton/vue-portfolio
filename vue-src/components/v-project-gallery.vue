<template>
	<div class="project-gallery row">
		<v-project v-resize-project v-for="project in projects" :key="project.name" :project=project>
			
		</v-project>
	</div>
</template>

<script>

import vProject from './v-portfolio-project.vue';

export default {
	name: "v-home-ui",
	data: function() {
		return {
			projects: [
				{ 
					name: "Poll Site",
					summary: "A Straw Poll clone using pure css and HTML",
					img: "./public/images/poll.jpg"
				},
				{ 
					name: "North Force",
					summary: "Website for North Force Landscaping using Sass and Flex Box Grid",
					img: "./public/images/north-force.jpg"
				},
				{ 
					name: "This Website",
					summary: "A Portfolio website built using VueJs",
					img: "./public/images/portfolio.jpg"
				}
			]
		}
	},
	components: {
		vProject
	},
	directives: {
		resizeProject: {
			inserted: function(el) {
				resizeProject(el);
				window.addEventListener("resize", function() {
					resizeProject(el);
				})
			}
		}
	}
}

function resizeProject(el) {
	el.style.height = (Math.ceil(el.offsetWidth * 0.8 / 100) * 100) + "px";
}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.project-gallery {
	margin: 0 1em;
	text-align: center;
}

</style>