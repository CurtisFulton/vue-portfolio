<template>
	<v-flex xs12>
		<v-layout row>
			<v-flex sm10 md10 offset-md1 offset-sm1>
				<h2 class="headline brown--text text--lighten-2">Technologies used</h2>
				<v-layout row wrap>
					<slot></slot>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-flex>	
</template>

<script>

export default {
	name: "v-project-technologies",
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