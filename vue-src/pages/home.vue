<template>
	<v-abstract-background>
		<v-container class="fill-height">
			<v-layout row wrap>
				<v-flex xs12 class="valign halign"> 
					<div id="main-content" class="center-text">
						<h2>Curtis Fulton</h2>
						<h4>Web Developer</h4>
						<nav class="home-nav">
							<router-link to="/"><v-btn flat large>Home</v-btn></router-link>
							<router-link to="/about"><v-btn flat large>About Me</v-btn></router-link>
							<router-link to="/portfolio"><v-btn flat large>Portfolio</v-btn></router-link>
							<router-link to="/contact"><v-btn flat large>Get In Touch</v-btn></router-link>
						</nav>
					</div>
				</v-flex>	

			</v-layout>

		</v-container>

		<!--
		<div class="valign-wrapper col s12">
			<div class="row">
				<div class="valgin">
					<div class="row center">
						<div class="col s12 m12">
							<h2><strong>Curtis Fulton</strong></h2>
							<h4>Web Developer</h4>
						</div>
					</div>

					<nav class="row center">
						<div class="col s12 center no-padding">
							<ul>
								<li><router-link to="/">Home</router-link></li>
								<li><router-link to="/about">About Me</router-link></li>
								<li><router-link to="/portfolio">Portfolio</router-link></li>
								<li><router-link to="/contact">Get In Touch</router-link></li>
							</ul>
						</div>
				  	</nav>
				</div>
			</div>
		</div>

		-->
	</v-abstract-background>
</template>

<script>

import vAbstractBackground from "../components/v-abstract-background.vue";
import vHomeUi from "../components/v-home-ui.vue";


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

@import '../sass/variables';

.main-content {
	backdrop-filter: blur(2px);

	.btn {
		margin: 0;
	}

	.home-nav {

	}


}

</style>