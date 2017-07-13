<template>
	<div id="about">
		<v-main-layout>
			<v-content-container></v-content-container>
		</v-main-layout>
	</div>
</template>

<script>

import vMainLayout from '../layouts/main-layout.vue'; 
import vContentContainer from '../components/v-content-container.vue'; 

export default {
	name: "v-about",
	data: function() {
		return {

		}
	},
	components: {
		vMainLayout,
		vContentContainer
	}
}

</script>

<style lang="scss" scoped>

#about {
	width: 100%;
	height: 100%;
}

</style>