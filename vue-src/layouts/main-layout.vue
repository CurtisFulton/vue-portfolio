<template>
	<div class="background">
		<div class="fill-height container row">
			<div class="fill-height col s3">
				<v-side-nav></v-side-nav>	
			</div>
			<div class="fill-height col s9">
				<slot></slot>
			</div>
		</div>
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

.background {
	height: 100%;
	width: 100%;
	background-image: $background-gradient;
}

.container {
	margin-bottom: 0;
}

</style>