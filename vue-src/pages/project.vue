<template>
	<component :is=componentName></component> 
</template>

<script>

import mainLayout from '../layouts/main-layout.vue'; 

// All Separate Projects
import vPoll from '../components/projects/poll.vue'
import vPortfolio from '../components/projects/portfolio.vue'
import vNorthForce from '../components/projects/north-force.vue'

export default {
	name: "v-project",
	data: function() {
		return {

		}
	},
	components: {
		mainLayout,
		vPoll,
		vPortfolio,
		vNorthForce
	},
	computed: {
		componentName: function() {
			return 'v-' + this.$route.params.project;
		}
	}
}

</script>

<style lang="scss" scoped>

</style>