<template>
	<div class="background">
		<div class="fill-height container row">
			<div class="fill-height col s4">
				<v-side-nav></v-side-nav>	
			</div>
			<div class="col s8">
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

.background {
	height: 100%;
	width: 100%;
	background-image: linear-gradient(to bottom right, #D5D5D5 0%, #FFFFFF 100%);
}

.container {
	margin-bottom: 0;
}

</style>