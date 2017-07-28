<template>
	<div class="background-gradient">
		<slot></slot>
	</div>
</template>

<script>

import vSideNav from '../components/v-side-nav.vue';

export default {
	name: "v-main-layout",
	data: function() {
		return {

		}
	},
	components: {
		vSideNav
	}
}

</script>

<style lang="scss" scoped>

@import '../sass/_variables';

.background-gradient {
	height: 100%;
	width: 100%;
	background-image: $background-gradient;
	overflow-y: hidden;
}

</style>