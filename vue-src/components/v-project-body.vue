<template>
	<v-layout row wrap>
		<v-flex xs12>
			<v-layout row>
				<v-flex sm10 md10 offset-md1 offset-sm1>
					<slot></slot>
				</v-flex>
			</v-layout>
		</v-flex>
	</v-layout>
</template>

<script>

export default {
	name: "v-project-body",
	data: function() {
		return {

		}
	},
	components: {
	}
}

</script>

<style lang="scss" scoped>

</style>