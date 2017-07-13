<template>
	<div class="project-gallery row">
		<v-project v-resize-project class="col s8 offset-s2 m4 offset-m1" v-for="project in projects" :key="project.name" :project=project></v-project>
	</div>
</template>

<script>

import vProject from './v-portfolio-project.vue';

export default {
	name: "v-home-ui",
	data: function() {
		return {
			projects: [
				{ name: "This Website" },
				{ name: "Poll Site" },
				{ name: "North Force" },
				{ name: "Test" }
			]
		}
	},
	components: {
		vProject
	},
	directives: {
		resizeProject: {
			inserted: function(el) {
				el.style.height = (Math.ceil(el.offsetWidth * 0.8 / 10) * 10) + "px";
			}
		}
	}
}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.project-gallery {
	overflow-x: none;
	overflow-y: none;
}

</style>