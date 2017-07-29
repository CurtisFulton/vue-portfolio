<template>
	<main-layout>
		<v-container fill-width fluid>
			<v-layout row wrap class="title-container">
				<v-flex sm12 md10 offset-md1 class="project-title center-text">
					<h1 class="display-2">Portfolio Website</h1>
				</v-flex>
			</v-layout>
			<v-container fill-height fluid class="mt-5">
				<v-layout row>
					<v-flex sm10 md9 offset-md2 offset-sm1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</v-flex>
				</v-layout>
			</v-container>
		</v-container>
	</main-layout>
</template>

<script>

import mainLayout from '../../layouts/main-layout.vue'; 

export default {
	name: "v-contact",
	data: function() {
		return {

		}
	},
	components: {
		mainLayout
	}
}

</script>

<style lang="scss" scoped>

.container {
	padding: 0;
}

.title-container {
	width: 100%;
	border-bottom: 1px solid;
}

.project-title {

}

.border-bottom {
	border-bottom: 1px groove;
}

.border-right {
	border-right: 1px groove;
}

</style>