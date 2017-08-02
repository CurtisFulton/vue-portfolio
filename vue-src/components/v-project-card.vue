<template>
	<v-card class="card-container">
		<v-card-media
		  :src="project.img"
		  height="200px"
		>
		</v-card-media>
		<v-card-title primary-title>
		  <div>
		    <div class="subheading">{{ project.title }}</div>
		    <span class="grey--text description">{{ project.description }}</span>
		  </div>
		</v-card-title>
		<v-card-actions>
		  <v-btn :href=project.liveURL v-if="!project.disableLiveLink" class="brown--text ml-0" flat>Live Project</v-btn>
		  <v-spacer></v-spacer>
		  <v-btn :to=moreURL class="grey--text text--darken-3" flat>About Project</v-btn>
		</v-card-actions>
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
		}
	}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

</style>