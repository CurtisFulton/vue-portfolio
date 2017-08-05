<template>
	<v-container fluid fill-width fill-height>
		<nav class="fill-width">
			<v-layout row wrap class="nav-container fill-width">
				<v-flex xs12 class="nav-item">
					<v-btn to="/" flat large class="nav-link">Home</v-btn>
				</v-flex>
				<v-flex xs12 class="nav-item">
					<v-btn to="/about" flat large class="nav-link">About Me</v-btn>
				</v-flex>
				<v-flex xs12 class="nav-item">
					<v-btn to="/portfolio" exact flat large class="nav-link">Portfolio</v-btn>
				</v-flex>
				<v-flex xs12 class="nav-item">
					<v-btn to="/blog" flat large class="nav-link">Blog</v-btn>
				</v-flex>
			</v-layout>
		</nav>
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

.nav-container {
	display: flex;
}

.nav-link {
	width: 100%;
	margin-left: 0;
	margin-right: 0;
	color: inherit;
}

</style>