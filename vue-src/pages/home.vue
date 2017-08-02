<template>
	<v-abstract-background>
		<v-container class="fill-height">
			<v-layout row wrap>
				<v-flex xs12 class="valign halign"> 
					<div id="main-content" class="center-text">
						<h2>Curtis Fulton</h2>
						<h4>Web Developer</h4>
						<v-divider></v-divider>
						<nav class="home-nav">
							<router-link to="/about"><v-btn flat large>About Me</v-btn></router-link>
							<router-link to="/portfolio" class="border"><v-btn flat large>Portfolio</v-btn></router-link>
							<router-link to="/blog"><v-btn flat large>Blog</v-btn></router-link>
						</nav>
					</div>
				</v-flex>	
			</v-layout>
		</v-container>
	</v-abstract-background>
</template>

<script>

import vAbstractBackground from "../components/v-abstract-background.vue";


export default {
	name: "v-home",
	data: function() {
		return {

		}
	},
	components: {
		vAbstractBackground
	}
}

</script>

<style lang="scss" scoped>

@import '../sass/variables';

.main-content {
	backdrop-filter: blur(2px);

	.btn {
		margin: 0;
	}
}

.border {
	border-left: 1px dotted $dusty;
	border-right: 1px dotted $dusty;
}

</style>