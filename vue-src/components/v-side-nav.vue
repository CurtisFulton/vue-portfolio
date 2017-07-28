<template>
	<v-container fluid fill-width fill-height>
		<div>
			<v-layout row wrap class="fill-width">
				<v-flex xs12 class="nav-item">
					<router-link to="/"><v-btn flat large class="nav-link">Home</v-btn></router-link>
				</v-flex>
				<v-flex xs12 class="nav-item">
					<router-link to="/about"><v-btn flat large class="nav-link">About Me</v-btn></router-link>
				</v-flex>
				<v-flex xs12 class="nav-item">
					<router-link to="/portfolio"><v-btn flat large class="nav-link">Portfolio</v-btn></router-link>
				</v-flex>
				<v-flex xs12 class="nav-item">
					<router-link to="/blog"><v-btn flat large class="nav-link">Blog</v-btn></router-link>
				</v-flex>
			</v-layout>
		</div>
	</v-container>
</template>

<script>

	export default {
		name: "v-side-nav",
		data: function() {
			return {

			}
		}
	}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.nav-item {
	padding: 0;
}

.nav-link {
	width: 100%;
	margin-left: 0;
	margin-right: 0;
}

</style>