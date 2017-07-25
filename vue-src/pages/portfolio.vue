<template>
	<main-layout>
		<v-content-container>
			<v-project-gallery></v-project-gallery>
		</v-content-container>
	</main-layout>
</template>

<script>

import mainLayout from '../layouts/main-layout.vue'; 
import vContentContainer from '../components/v-content-container.vue';
import vProjectGallery from '../components/v-project-gallery.vue';

export default {
	name: "v-home",
	data: function() {
		return {

		}
	},
	components: {
		mainLayout,
		vContentContainer,
		vProjectGallery
	}
}

</script>

<style lang="scss" scoped>

</style>