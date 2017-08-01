<template>
	<v-layout row wrap class="title-container">
		<v-flex xs2 md1 class="valign">
			<v-btn exact to="/portfolio" flat class="back-btn" icon><v-icon large>keyboard_arrow_left</v-icon></v-btn>
		</v-flex>
		<v-flex xs10 md11 class="center-text">
			<h1 class="display-2"><slot></slot></h1>
		</v-flex>
	</v-layout>
</template>

<script>

export default {
	name: "v-project-header",
	data: function() {
		return {

		}
	},
	components: {

	}
}

</script>

<style lang="scss" scoped>

.title-container {
	width: 100%;
	border-bottom: 1px solid;
}

.back-btn {
	color: inherit;
	margin-bottom: 1.5em;
}

</style>