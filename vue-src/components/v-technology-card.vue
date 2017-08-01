<template>
	<v-flex xs12 md6>
		<v-card class="elevation-0">
			<v-card-text class="grey lighten-3">
				<slot></slot>
			</v-card-text>
		</v-card>
	</v-flex>
</template>

<script>

export default {
	name: "v-technology-card",
	data: function() {
		return {

		}
	}
}

</script>

<style lang="scss" scoped>

</style>