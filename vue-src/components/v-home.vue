<template>
	<v-abstract-background>
		<v-home-ui></v-home-ui>
	</v-abstract-background>
</template>

<script>

import vAbstractBackground from "./v-abstract-background.vue";
import vHomeUi from "./v-home-ui.vue";


export default {
	name: "v-home",
	data: function() {
		return {

		}
	},
	components: {
		vAbstractBackground,
		vHomeUi
	}
}

</script>

<style lang="scss" scoped>

</style>