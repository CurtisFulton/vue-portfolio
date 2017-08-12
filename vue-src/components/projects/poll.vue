<template>
	<main-layout>
		<article>
			<h1 class="display-2 center-text">Poll Website</h1>
			<hr>

			<section class="main-content">
				<h2 class="headline brown--text text--lighten-2">Technologies Used</h2>
				<p>
					HTML, CSS, NodeJS
				</p>

				<h2 class="headline brown--text text--lighten-2">Project Summary</h2>
				<p>
					This was my first project in web development. The goal of this was to get a basic understanding of all the core concepts, and so I decided to keep the frameworks to a minimum. A big part of the website was the backend and getting the polling to work properly so I focused on that. Unfortunately I never go to really start on the UI side of things due to having the do the <router-link to="/portfolio/north-force">North Force Landscaping website</router-link>. I have decided to leave it as it, to keep a record what my first attempt at a website was like.
				</p>
				<p>
					Currently the project is not working and haven't had time to fix it. Once it is fixed I will add the live link and finish this write up.
				</p>

				<h2 class="headline brown--text text--lighten-2">Challenges Faced</h2>
				<p>
					...
				</p>


				<h2 class="headline brown--text text--lighten-2">Future Improvements</h2>
				<p>
					...
				</p>
			</section>
		</article>
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

@import '../../sass/_variables';

.btn {
	color: inherit;
}

.main-content {
	margin: 1em 4em;

	@media (max-width: $sm-break) {
		margin: 1em 1.5em;
	}
}

</style>