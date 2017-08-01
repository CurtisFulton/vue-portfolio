<template>
	<v-background>
		<template>
			<v-toolbar fixed class="hidden-md-and-up toolbar halign">
				<v-toolbar-items class="valign ma-0">
					<v-btn to="/" flat>Home</v-btn>
					<v-btn to="/about" flat>About Me</v-btn>
					<v-btn to="/portfolio" flat exact>Portfolio</v-btn>
					<v-btn to="/blog" flat>Blog</v-btn>
				</v-toolbar-items>
			</v-toolbar>
		</template>

		<v-container fluid class="main-container"> 
			<div class="hidden-md-and-up"></div>
			<v-layout row class="fill-height">
				<v-flex md3 offset-md1 class="hidden-sm-and-down nav-bar elevation-1">
					<v-side-nav></v-side-nav>
				</v-flex>
				<v-spacer></v-spacer>
				<v-flex xs12 sm9 md7>
					<transition name="fade" mode="out-in">
						<v-container fluid class="content-container elevation-1">
							<slot></slot>
						</v-container>
					</transition>
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

.btn {
	color: inherit;
}

.main-container {
	height: 100%;
	padding: 0;

	overflow-y: auto;
}

.content-container {
	background-color: $content-background-color;
	height: 100%;
	padding-left: 0;
	padding-right: 0;

	overflow-y: auto;

	@media (max-width: 1020px) {
		padding-top: 5.5em;
	}
}

.nav-bar {
	background-color: $content-background-color;
	padding: 0;
}

.toolbar {
	background-color: $paper;
}

</style>