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
		    <span class="grey--text">{{ project.description }}</span>
		  </div>
		</v-card-title>
		<v-card-actions>
		  <v-btn :href=project.liveURL v-if="!project.disableLiveLink" class="brown--text" flat>Live Project</v-btn>
		  <v-spacer></v-spacer>
		  <v-btn :to=moreURL class="grey--text text--darken-3" icon v-tooltip:bottom="{ html: 'More' }">
		    <v-icon>more_horiz</v-icon>
		  </v-btn>
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

.btn {
	margin: 0;
}

.card-container {

}

</style>