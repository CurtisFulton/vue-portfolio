<template>
	<v-background>
		<template>
			<v-toolbar fixed class="hidden-md-and-up">
				<v-spacer></v-spacer>
				<v-toolbar-items>
					<router-link to="/"><v-btn flat>Home</v-btn></router-link>
				</v-toolbar-items>
				<v-spacer></v-spacer>
			</v-toolbar>
		</template>
		<v-container fluid class="main-container"> 
			<div class="hidden-md-and-up pt-5 pb-3"></div>
			<v-layout row class="fill-height">
				<v-flex md3 offset-md1 class="hidden-sm-and-down nav-bar elevation-1">
					<v-side-nav></v-side-nav>
				</v-flex>
				<v-spacer></v-spacer>
				<v-flex xs12 sm10 md7>
					<v-container fluid class="content-container elevation-1">
						<slot></slot>
					</v-container>
				</v-flex>
				<v-spacer></v-spacer>
			</v-layout>
		</v-container>
	</v-background>
</template>

<script>

import vBackground from '../components/v-background.vue';
import vSideNav from '../components/v-side-nav.vue';

export default {
	name: "v-main-layout",
	data: function() {
		return {

		}
	},
	components: {
		vBackground,
		vSideNav
	}
}

</script>

<style lang="scss" scoped>

@import '../sass/_variables';

.main-container {
	height: 100%;
	padding-top: 0;
	padding-bottom: 0;
}

.content-container {
	background-color: $content-background-color;
	height: 100%;

	overflow-y: auto;
}

.nav-bar {
	background-color: $content-background-color;
	padding: 0;
}

</style>