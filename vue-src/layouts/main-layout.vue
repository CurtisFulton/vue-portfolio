<template>
	<v-container fill-height fill-width fluid class="background pa-0">
		<template v-if="showSideBar"> 
			<v-side-nav class="side-nav elevation-2"></v-side-nav>
		</template>
		<template v-else> 
			<v-top-nav></v-top-nav>
		</template>

		<main class="content elevation-2">
			<slot></slot>
		</main>
	</v-container>
</template>

<script>

import vBackground from '../components/v-background.vue';
import vSideNav from '../components/v-side-nav.vue';
import vTopNav from '../components/v-top-nav.vue';

export default {
	name: "main-layout",
	data: function() {
		return {
			showSideBar: false,
		}
	},
	mounted: function() {
		window.addEventListener('resize', this.onResize);

		this.onResize();
	},	
	beforeDestroy: function() {
		window.removeEventListener('resize', this.onResize);
	},
	methods: {
		onResize: function() {
			// Cross Browser width
			var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			if (width < 992)
				this.showSideBar = false;
			else 
				this.showSideBar = true;
		}
	},
	components: {
		vBackground
	}
}

</script>

<style lang="scss" scoped>

@import '../sass/_variables';

.background {
	background-image: $background-gradient;
	display: flex;
}

.side-nav {
	background-color: $content-background-color;
	flex: 0 0 25em;
	margin: 0;
}

.content {
	display: flex;
	flex-direction: column;

	background-color: $content-background-color;
	height: 100%;
	width: 100%;

	margin: 0em 5%;
	overflow-y: auto;
	overflow-x: hidden; 
	
	@media (max-width: $md-break){
		padding-top: $header-height;
	}
}

</style>