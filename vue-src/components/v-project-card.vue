<template>
	<v-card class="card-container">
		<v-card-media
		  :src="project.img"
		  height="200px"
		>
		</v-card-media>
		<h1 class="ml-3 headline">{{ project.title }}</h1>
		<p class="grey--text ml-3 description">{{ project.description }}</p>
		<div class="actions">
			<hr>
			<v-card-actions class="actions">
			  <v-btn :href=project.liveURL v-if="!project.disableLiveLink" class="brown--text ml-0" flat>Live Project</v-btn>
			  <v-spacer></v-spacer>
			  <v-btn :to=moreURL class="grey--text text--darken-3" flat>About Project</v-btn>
			</v-card-actions>
		</div>


	</v-card>
</template>

<script>

	export default {
		name: "v-project-card",
		data: function() {
			return {

			}
		},
		props: ['project'],
		computed: {
			moreURL: function() {
				return '/portfolio/' + this.project.projectUrl
			}
		},
		mounted: function() {
			var projects = document.querySelectorAll('.card-container');
			Array.prototype.forEach.call(projects, function(project){
			    project.removeAttribute('style');
			});
		}
	}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.card-container {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.actions {
	margin-top: auto;
}

</style>